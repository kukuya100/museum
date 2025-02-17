const { Visit, User, Explore } = require("./models");
const Bcrypt = require("bcrypt");
const moment = require("moment");
// const Token = require('../lib/token');
// const {tokenPeriod} = require('../dummy/config');
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
const saltRounds = 10;
const v = "1.0.0";
const Query = {
  getCount: async (_, args, context) => {
    try {
      let response = { data: {} };
      // console.log(context.user.ip);

      if (args.operation == "visit") {
        // console.log(args.queryObj)
        response.data[args.operation] = await Visit.countDocuments(
          args.queryObj
        );
      } else if (args.operation == "review") {
        // console.log(args.queryObj)
        response.data[args.operation] = await Review.countDocuments(
          args.queryObj
        );
      }

      if (response) {
        return response;
      } else {
        throw new Error("Invalid.");
      }

      return response;
    } catch (e) {
      return e;
    }
  },

  getVisitCount: async (_, args, context) => {
    try {
      let response = { data: {} };
      response.data = await Visit.findOne({
        visitorId: args.visitorId,
        ip: args.data.ip,
        date: args.data.date,
      });
      args.data.visitCount = await Visit.countDocuments(args.queryObj);
      return response;
    } catch (e) {
      return e;
    }
  },

  getVisitUser: async (_, args, context) => {
    try {
      let response = { data: {} };
      if (args._id) {
      } else {
        args.data.ip = context.user.ip;
        args.data.deviceType = context.user.deviceType;
        args.data.date = moment().format("YYYY-MM-DD");
        args.data.visitorId = args.visitorId;

        response.data = await Visit.findOne({
          visitorId: args.visitorId,
          ip: args.data.ip,
          date: args.data.date,
        });
        if (!response.data) {
          args.data.visitCount = await Visit.countDocuments(args.queryObj);
          args.data.visitCount++;
          response.data = await Visit.findOneAndUpdate(
            {
              visitorId: args.visitorId,
              ip: args.data.ip,
              date: args.data.date,
            },
            args.data,
            { upsert: true, setDefaultsOnInsert: true, returnOriginal: false }
          );
        }
      }

      return response;
    } catch (e) {
      return e;
    }
  },

  getUser: async (_, args, context) => {
    try {
      let response = { data: {} };
      args.data.ip = context.user.ip;
      args.data.deviceType = context.user.deviceType;
      response.data = await User.findOneAndUpdate(
        { ip: args.data.ip },
        args.data,
        { upsert: true, setDefaultsOnInsert: true, returnOriginal: false }
      );
      // console.log(response.data);

      // if (args.operation == 'review') {
      //     // console.log(args.queryObj)
      //     response.data[args.operation] = await Review.countDocuments(args.queryObj);
      // }
      //
      // if(response) {
      //     return response;
      // }
      // else {
      //     throw new Error('Invalid.');
      // }

      return response;
    } catch (e) {
      return e;
    }
  },

  exploreList: async (_, args, context) => {
    try {
      let query = {};
      let queryOption = {
        limit: args.limit,
        sort: { created_at: -1 },
      };
      if(args.excludedId) {
        query._id = {$ne: args.excludedId};
      }

      if (args.page) {
        queryOption.page = args.page;
      }
      return Explore.paginate(query, queryOption).then(function (result) {
        return result;
      });
    } catch (e) {
      return e;
    }
  },

  getExplorerById: async (_, args, context) => {
    try {
      let response = { data: {} };
      if (args._id) {
        response.data = await Explore.findById(args._id);
      }

      return response;
    } catch (e) {
      return e;
    }
  },

  getDiscoveredArtifactById: async (_, args, context) => {
    try {
      let response = { data: {} };
      if (args._id) {
        response.data = await User.findById(args._id);
      }

      return response;
    } catch (e) {
      return e;
    }
  },

  getVisitorStat: async (_, args, context) => {
    try {
      let response = { data: [] };
      // 날짜 유효성 검사
      if (args.start_date && !/^\d{4}-\d{2}-\d{2}$/.test(args.start_date)) {
        response = {
          error: "유효한 날짜를 YYYY-MM-DD 형식으로 입력해주세요.",
        };
        return response;
      }

      if (args.end_date && !/^\d{4}-\d{2}-\d{2}$/.test(args.end_date)) {
        response = {
          error: "유효한 날짜를 YYYY-MM-DD 형식으로 입력해주세요.",
        };
        return response;
      }

      const query = { };

      // 날짜 조건 동적으로 추가
      if (args.start_date || args.end_date) {
        query.lastcon_date = {};

        if (args.start_date) {
          query.lastcon_date.$gte = new Date(args.start_date + "T00:00:00.000Z"); // 시작 날짜
        }
        if (args.end_date) {
          query.lastcon_date.$lte = new Date(args.end_date + "T23:59:59.999Z"); // 종료 날짜
        }
      }
      const result = await User.aggregate([
        {
          $match: query
        },
        {
          $group: {
            _id: null, // 모든 문서를 하나로 그룹핑
           
            male: { $sum: { $cond: [{ $eq: ["$gender", "male"] }, 1, 0] } },
            female: { $sum: { $cond: [{ $eq: ["$gender", "female"] }, 1, 0] } },
            
            
            //A: 개인 B: 가족 C: 친구 D: 학교 단체 E: 단체 F: 기타
            individual: { $sum: { $cond: [{ $eq: ["$withWhom", "A"] }, 1, 0] } },
            family: { $sum: { $cond: [{ $eq: ["$withWhom", "B"] }, 1, 0] } },
            friends: { $sum: { $cond: [{ $eq: ["$withWhom", "C"] }, 1, 0] } },
            schoolGroup: { $sum: { $cond: [{ $eq: ["$withWhom", "D"] }, 1, 0] } },
            groups: { $sum: { $cond: [{ $eq: ["$withWhom", "E"] }, 1, 0] } },
            others: { $sum: { $cond: [{ $eq: ["$withWhom", "F"] }, 1, 0] } },

            //A: 8세 미만 B: 8~13 C: 14~16 D: 17~19 E: 20~29 F: 30~39 G: 50~69 H: 70세 이상
            kids: { $sum: { $cond: [{ $eq: ["$age", "A"] }, 1, 0] } },
            elementary: { $sum: { $cond: [{ $eq: ["$age", "B"] }, 1, 0] } },
            middle: { $sum: { $cond: [{ $eq: ["$age", "C"] }, 1, 0] } },
            high: { $sum: { $cond: [{ $eq: ["$age", "D"] }, 1, 0] } },
            twenties: { $sum: { $cond: [{ $eq: ["$age", "E"] }, 1, 0] } },
            thirtiesForties: { $sum: { $cond: [{ $eq: ["$age", "F"] }, 1, 0] } },
            fiftiesSixties: { $sum: { $cond: [{ $eq: ["$age", "G"] }, 1, 0] } },
            seventiesPlus: { $sum: { $cond: [{ $eq: ["$age", "H"] }, 1, 0] } },
            totalCount: { $sum: 1 }
          },
        },
        {
          $project: {
            _id: 0,
            totalCount: 1,
            gender: { male: "$male", female: "$female" },
            withWhom: { individual: "$individual", family: "$family", friends: "$friends", schoolGroup: "$schoolGroup", groups: "$groups", others: "$others" },
            age: { kids: "$kids", elementary: "$elementary", middle: "$middle", high: "$high", twenties: "$twenties", thirtiesForties: "$thirtiesForties", fiftiesSixties: "$fiftiesSixties", seventiesPlus: "$seventiesPlus" },
          },
        },
      ]);

      // 결과가 없을 경우 기본값 처리
      if (!result || result.length === 0) {
        return {
            totalCount: 0,
            gender: { male: 0, female: 0 },
            withWhom: { individual: 0, family: 0, friends: 0, schoolGroup: 0, groups: 0, others: 0 },
            age: { kids: 0, elementary: 0, middle: 0, high: 0, twenties: 0, thirtiesForties: 0, fiftiesSixties: 0, seventiesPlus: 0 },
        };
      }
      
      return result[0];
    } catch (e) {
      return e.message;
    }
  },

//   // 샘플 데이터베이스 (임시 데이터)
// const visitorData = {
//   "2024-12-19": {
//     total: 1000,
//     male: 500,
//     female: 400,
//     kids: 50, // 미취학아동
//     elementary: 80, // 초등학생
//     middle: 70, // 중학생
//     high: 100, // 고등학생
//     twenties: 150, // 20대
//     thirtiesForties: 300, // 30~40대
//     fiftiesSixties: 200, // 50~60대
//     seventiesPlus: 50, // 70대 이상
//     individual: 400, // 개인
//     family: 300, // 가족
//     friends: 200, // 친구
//     schoolGroup: 50, // 학교 단체
//     groups: 30, // 단체
//     others: 20, // 기타
//   },
// };

  // getSetting: async (_, args) => {
  //     try {
  //         let response = {
  //             data : {
  //                 v: v
  //             }
  //         };
  //         console.log(args.v)
  //         if(args.v !== v || args.v === '0.0.0') {
  //             response.data.ConBoard = await ConBoard.find({conf: 'board'}).exec();
  //
  //             return response;
  //         }
  //         else {
  //             response.data = 'noUpdate';
  //             return response;
  //         }
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  //
  // checkUserId: async (_, args) => {
  //     try {
  //         let response = await User.findOne({userId: args.userId});
  //         if(!response) {
  //             return {isCheck: true};
  //         }
  //         else {
  //             throw new Error('Invalid userId.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // checkUserEmail: async (_, args) => {
  //     try {
  //         let response = await User.findOne({email: args.email});
  //         if(!response) {
  //             return {isCheck: true};
  //         }
  //         else {
  //             throw new Error('Invalid email.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // signIn: async (_, args) => {
  //     try {
  //         let response = await User.findOne({userId: args.userId});
  //         if(response) {
  //             const isCheckPw = await Bcrypt.compare(args.password, response.password);
  //             if(isCheckPw) {
  //                 response.token = Token.createToken(response, tokenPeriod.short);
  //                 response.rfToken = Token.createToken(response, tokenPeriod.long);
  //                 return response;
  //             }
  //             else {
  //                 throw new Error('Invalid password.');
  //             }
  //         }
  //         else {
  //             throw new Error('Invalid userId.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // getMe: async (_, args, context) => {
  //     try {
  //
  //         let userId = context.user.id;
  //         console.log(userId)
  //
  //         let response = null;
  //         if(userId) {
  //             return response = await User.findOne({_id:userId});
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         if(!response) throw new Error('Invalid auth..');
  //
  //         return response
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // signOut: async (_, args, context) => {
  //     try {
  //         let id = context.user.id;
  //         let response = null;
  //         if(id) {
  //             response = await User.updateOne({ _id: id }, {rfToken:''});
  //             if(response.ok ===1) {
  //                 return {isUpdated:true};
  //             }
  //             else {
  //                 throw new Error('fail update.');
  //             }
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // getUser: async (_, args) => await User.find(args).exec(),
  // // getUsers: async () => await User.find({}).exec(),
  // getUsers: async (_, args, context) => {
  //     try {
  //
  //         let cutoff = new Date();
  //         //cutoff.setDate(cutoff.getDate()); $gte,
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             //select: 'name email aboutme country -_id',
  //             populate: [{ path: 'items', select: 'title images -_id' }, { path: 'author', select: 'name email aboutme country -_id' }],
  //             sort:     { created_at: -1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return User.paginate({}, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // getWTA: async (_, args) => {
  //     try {
  //         // TODO 고도몰 관리자 : appId, key 검색 -> 만료일 체크(Expiry) -> 유효하면 onesignal 키 전송, d-30 알림값 전송
  //         // TODO 앱 : appId, key 검색 -> 만료일 체크(Expiry) -> url 전달
  //         let response = {
  //             data : null,
  //             curDate : moment().format("YYYY-MM-DD , h:mm:ss a")
  //         };
  //
  //         response.data = await WebToApp.findOne({appId: args.appId, key: args.key});
  //         if(response.data) {
  //             return response;
  //         }
  //         else {
  //             throw new Error('Invalid AppId OR key.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // getWTAList: async (_, args, context) => {
  //     try {
  //
  //         let query = {};
  //         let queryOption = {
  //             limit: args.limit,
  //             sort:     { created_at: -1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return WebToApp.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getSkinList: async (_, args, context) => {
  //   try {
  //
  //     let query = {
  //         isChecked:false
  //     };
  //     let queryOption = {
  //       limit: args.limit,
  //       sort:     { updated_at: -1 }
  //     };
  //
  //     if(args.page) {
  //       queryOption.page = args.page;
  //     }
  //
  //     //GodoSkin, Cafe24Skin,
  //     if(args.platform == 'cafe24') {
  //       return Cafe24Skin.paginate(query, queryOption).then(function(result) {
  //         return result;
  //       });
  //     }
  //     else {
  //       return GodoSkin.paginate(query, queryOption).then(function(result) {
  //         return result;
  //       });
  //     }
  //
  //
  //
  //
  //   } catch(e) {
  //     return e;
  //   }
  //
  // },
  //
  //
  // getBoardList: async (_, args, context) => {
  //     try {
  //
  //         let query = {};
  //         if(args.cbdId) {
  //             query.cbdId = args.cbdId;
  //         }
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             populate: [{ path: 'author', select: '-password' }, {path: 'cbdId'}],
  //             sort:     { created_at: -1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return Board.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getBoardCommentList: async (_, args, context) => {
  //     try {
  //
  //         let query = {
  //             depth : 1
  //         };
  //         if(args.boardId) {
  //             query.boardId = args.boardId;
  //         }
  //         if(args.parentId) {
  //             query.parentId = args.parentId;
  //             query.depth = query.depth ? query.depth : 2
  //         }
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             populate: [{ path: 'author', select: '-password' }, {path: 'childComments', populate : {path: 'author', select: '-password'}}],
  //             sort:     { created_at: -1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return BoardComment.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  //
  //
  // getCategory: async () => {
  //     try {
  //         let category = await Category.find().sort({ depth:1, order: 1 }).exec();
  //         return category;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getBoard: async (_, args, context) => {
  //     try {
  //         let response = {
  //             data : null
  //         };
  //         let userId = context.user.id;
  //         let content = await Board.findById(args.id).populate({path: 'author', select: 'name'});
  //         if(content) {
  //
  //             if(content.isSecret) {
  //                 if(args.password) {
  //                     const isCheckPw = await Bcrypt.compare(args.password, content.password);
  //                     if(isCheckPw) {
  //                         response.data = await Board.findOneAndUpdate({_id:args.id}, { $inc: {view:1} }).populate({path: 'author', select: 'name'});
  //                     }
  //
  //                 }
  //                 else {
  //                     response.data = await Board.findOneAndUpdate({_id:args.id, author:userId}, { $inc: {view:1} }).populate({path: 'author', select: 'name'});
  //                 }
  //             }
  //             else {
  //                 response.data = content;
  //             }
  //             //console.log(response.data)
  //
  //             if(response.data) {
  //                 return response;
  //             }
  //             else {
  //                 throw new Error('Invalid auth.');
  //             }
  //         }
  //         else {
  //             throw new Error('Invalid content.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // getFormTemp: async (_, args, context) => {
  //     try {
  //
  //         let response = {};
  //         response.data = await FormTemp.findOne(args).populate({path: 'questionGroups', populate: { path: 'questions' }});
  //         if(response.data) {
  //             return response;
  //         }
  //         else {
  //             throw new Error('Invalid content.');
  //         }
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  //
  // getCounsel: async (_, args, context) => {
  //     try {
  //         let userId = context.user.id;
  //         if(userId) {
  //             let response = {};
  //             response.data = await Counsel.findOne({user:userId, _id:args.id}).populate([{ path: 'user' }, { path: 'formTemp', populate:{path: 'questionGroups' }} ]);
  //             if(response.data) {
  //                 return response;
  //             }
  //             else {
  //                 throw new Error('Invalid content.');
  //             }
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  //
  //
  // getQuestionList: async (_, args, context) => {
  //     try {
  //
  //         let query = {};
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             //select: 'key category person questionGroups questionGroupsMeta updated_at created_at',
  //             sort:     { created_at: 1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return Question.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getQuestionGroupList: async (_, args, context) => {
  //     try {
  //
  //         let query = {};
  //         if(args.category) {
  //             query.category = args.category;
  //         }
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             //select: 'key category person questionGroups questionGroupsMeta updated_at created_at',
  //             populate: [{ path: 'questions' }],
  //             sort:     { created_at: -1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return QuestionGroup.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getFormTempList: async (_, args, context) => {
  //     try {
  //
  //         let query = {};
  //         let result;
  //         if(args.categoresutlry) {
  //             query.category = args.category;
  //         }
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             populate: [{ path: 'questionGroups' }],
  //             sort:     { order: 1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //
  //         result = await FormTemp.paginate(query, queryOption);
  //         for(let key in result.docs) {
  //             for(let gkey in result.docs[key].questionGroups) {
  //                 let questionGroupsId = result.docs[key].questionGroups[gkey]._id;
  //                 let questionsObj = await QuestionGroup
  //                     .findById(questionGroupsId).populate({ path: 'questions' });
  //                 result.docs[key].questionGroups[gkey].questions = questionsObj.questions;
  //             }
  //         }
  //
  //         return result;
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // getCounselList: async (_, args, context) => {
  //     try {
  //
  //         let userId = context.user.id;
  //         let query = {
  //             user:args.userId ? args.userId : userId
  //         };
  //
  //         let queryOption = {
  //             limit: args.limit,
  //             populate: [{ path: 'formTemp' }],
  //             sort:     { created_at: 1 }
  //         };
  //
  //         if(args.page) {
  //             queryOption.page = args.page;
  //         }
  //         return Counsel.paginate(query, queryOption).then(function(result) {
  //             return result;
  //         });
  //
  //
  //
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
};

module.exports = Query;
