const { Visit, User, Explore } = require("./models");
const Bcrypt = require("bcrypt");
const moment = require("moment");
// const Util = require('../lib/util');
// const Token = require('../lib/token');
// const {tokenPeriod} = require('../dummy/config');
const path = require("path");

const saltRounds = 10;
const saltRoundsShort = 8;

const isAdminPass = true;
const Mutation = {
  updateVisit: async (_, args, context) => {
    try {
      let response = { data: {} };
      const ip = context.user.ip;
      const data = moment().format("YYYYMMDDHH");
      const visitId = args.fpId + ip + data;
      let updateData = {
        visitId: visitId,
        fpId: args.fpId,
        isKiosk: args.isKiosk,
        connectLocation: args.connectLocation,
        deviceType: context.user.deviceType,
        ip: ip,
        year: moment().year(),
        month: moment().month() + 1,
        week: moment().week(),
        day: moment().date(),
        hour: moment().hour(),
      };

      response.data = await Visit.findOneAndUpdate(
        { visitId: visitId },
        updateData,
        { returnOriginal: false, upsert: true, setDefaultsOnInsert: true },
      );
      //response.data = visitCount;

      return response;
    } catch (e) {
      return e;
    }
  },

  updateUser: async (_, args, context) => {
    try {
      let response = { data: {} };
      args.updated_at = Date.now();
      if (args._id) {
        response.data = await User.findOneAndUpdate({ _id: args._id }, args, {
          returnOriginal: false,
          upsert: true,
          setDefaultsOnInsert: true,
        });
      } else {
        args.visitCount = await User.countDocuments();
        args.visitCount++;
        response.data = await User.create(args);
        //response.data = data.toObject();
      }
      return response;
    } catch (e) {
      return e;
    }
  },

  updateExplore: async (_, args, context) => {
    try {
      let response = { data: {} };
      args.updated_at = Date.now();
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      // await Explore.create(args);
      if (args.id) {
        response.data = await Explore.findOneAndUpdate({ _id: args.id }, args, {
          returnOriginal: false,
          upsert: true,
          setDefaultsOnInsert: true,
        });
      } else {
        // if(args.visitCount) {
        //     response.data = await Explore.findOneAndUpdate({ visitCount: args.visitCount }, args, {returnOriginal: false, upsert: true, setDefaultsOnInsert: true});
        // }
        // else {
        //     response.data = await Explore.create(args);
        // }
        response.data = await Explore.create(args);
      }

      return response;
    } catch (e) {
      return e;
    }
  },

  // updateVisitCount: async (_, args, context) => {
  //     try {
  //         let response = {data : {}};
  //         const ip = context.user.ip;
  //         let today = new Date();
  //         today = today.setHours(0, 0, 0, 0); // 날짜를 00:00:00으로 설정
  //         let $inc = {};
  //         let searchQuery = { date: today, deviceType: context.user.deviceType };
  //         if(args.user_id) {
  //             searchQuery.user_id = args.user_id;
  //         }
  //         else {
  //             searchQuery.ip = args.ip;
  //         }
  //         $inc[args.pageName] = 1;
  //
  //         response.data = await VisitCount.findOneAndUpdate(searchQuery, { $inc }, {returnOriginal: false, upsert: true, setDefaultsOnInsert: true});
  //         //response.data = visitCount;
  //
  //         return response;
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },

  // updateCount: async (_, args, context) => {
  //     try {
  //         let response = {data : {}};
  //         const today = moment().format('YYYYMMDD');
  //         const unixTime = moment().unix();
  //         const ip = context.user.ip;
  //         const newLog = {log: args, env: context.user, unixTime : unixTime};
  //         newLog.log.model = 'review';
  //         let logData = {ip: ip};
  //         let logRes;
  //         let userLogData = await UserLog.findOne({ ip: ip });
  //
  //         switch (args.target) {
  //             case 'visitCount':
  //                 response.data = await Visit.findOneAndUpdate({ ip: ip ? args.id : args._id  }, { $inc: {likeCount:args.value} }, {upsert: false, new: false});
  //
  //                 break
  //             case 'unLikeCount':
  //                 response.data = await Visit.findOneAndUpdate({ _id: args.id ? args.id : args._id }, { $inc: {unLikeCount:args.value} }, {upsert: false, new: false});
  //                 break
  //         }
  //
  //
  //         return response;
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },

  // updateAccess: async (_, args, context) => {
  //     try {
  //
  //
  //         let response = {
  //             data: {}
  //         };
  //         var visitor = context.user;
  //         //console.log(visitor)
  //         if(visitor.ip) {
  //             //console.log(visitor)
  //             response = await Access.findOne({ip: visitor.ip});
  //             if(!response) {
  //                 response = await Access.create(visitor);
  //             }
  //             else {
  //                 visitor.updated_at = Date.now();
  //                 response = await Access.updateOne({ip: visitor.ip}, { ...visitor, $inc: {hit:1} });
  //             }
  //
  //             response.data = {
  //                 visitor : Token.createVisitToken(visitor, '1m')
  //             };
  //
  //             return response;
  //         }
  //         else {
  //             return false;
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // signUp: async (_, args) => {
  //     try {
  //
  //         if(args.password && args.password.length >= 3) {
  //             args.password = await Bcrypt.hash(args.password, saltRounds);
  //             args.perm = 0;
  //             let response = await User.create(args);
  //
  //             //let reCount = await Count.create({ 'targetId': response._id, 'type': 'user'});
  //
  //             return response;
  //         }
  //         else {
  //             throw new Error('Input password more than 3 characters.');
  //         }
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // signUpAdmin: async (_, args) => {
  //     try {
  //
  //         if(args.password && args.password.length >= 8) {
  //             args.password = await Bcrypt.hash(args.password, saltRounds);
  //             args.perm = 0;
  //             let response = await Admin.create(args);
  //
  //             return response;
  //         }
  //         else {
  //             throw new Error('Input password more than 8 characters.');
  //         }
  //
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // getRfAuth: async (_, args, context) => {
  //     try {
  //         let response = await User.findOne({userId:args.userId, id: context.tokens.id});
  //         if(response) {
  //             response.token = Token.createToken(response, tokenPeriod.short);
  //             response.rfToken = Token.createToken(response, tokenPeriod.long);
  //             return response;
  //         }
  //         else {
  //             throw new Error('Invalid rfAuth.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  // updateMe: async (_, args, context) => {
  //     try {
  //
  //         let userId = context.user.id;
  //         let response = null;
  //         args.updated_at = Date.now();
  //         if(userId) {
  //             response = await User.findOneAndUpdate({ _id: userId }, args, {returnOriginal: false});
  //             response.token = Token.createToken(response, tokenPeriod.short);
  //             response.rfToken = Token.createToken(response, tokenPeriod.long);
  //
  //             if(response) {
  //                 return response;
  //             }
  //             else {
  //                 throw new Error('fail update.');
  //             }
  //
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
  // updatePW: async (_, args, context) => {
  //     try {
  //         let id = context.user.id;
  //         let response = null;
  //         args.updated_at = Date.now();
  //         if (args.newPassword.length < 8) throw new Error('Input password more than 8 characters.');
  //         if(id) {
  //             response = await User.findOne({_id: id});
  //             const isCheckPw = await Bcrypt.compare(args.password, response.password);
  //             if (isCheckPw) {
  //                 let newPassword = await Bcrypt.hash(args.newPassword, saltRounds);
  //                 response = await User.updateOne({ _id: response._id }, {password:newPassword});
  //                 if(response.ok ===1) {
  //                     return {isUpdated:true};
  //                 }
  //                 else {
  //                     throw new Error('fail update.');
  //                 }
  //             }
  //             else {
  //                 throw new Error('Invalid password.');
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
  // genLic: async (_, args, context) => {
  //   try {
  //
  //     let response = {};
  //     let url = args.url.replace(/https|http|www|\.com.|\.co|\.kr|\.net/g, "").replace(/\:|\/|\./g, "");
  //     response.data = {};
  //     response.data.msg = "ok.";
  //     response.data.url = url;
  //     response.data.appId = "lic" + url.charAt(url.length-1) + await Util.IDGenerator(7) + url.charAt(1);
  //     response.data.key = await Bcrypt.hash(url, saltRoundsShort);
  //
  //     return response;
  //
  //   } catch(e) {
  //     return e;
  //   }
  // },
  //
  //
  //
  // genAppId: async (_, args, context) => {
  //     try {
  //
  //         let response = {};
  //         let url = args.url.replace(/https|http|www|\.com.|\.co|\.kr|\.net/g, "").replace(/\:|\/|\./g, "");
  //         response.data = {};
  //         response.data.msg = "ok.";
  //         response.data.url = url;
  //         response.data.appId = "wta" + url.charAt(url.length-1) + await Util.IDGenerator(7) + url.charAt(1);
  //         response.data.key = await Bcrypt.hash(url, saltRoundsShort);
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
  //
  // updateWTA: async (_, args, context) => {
  //     try {
  //
  //         let response = null;
  //         if(args.id) {
  //             response = await WebToApp.findOneAndUpdate({_id : args.id, appId : args.appId}, args, function(err, doc) {
  //                 if(err) return err;
  //             });
  //         }
  //         else {
  //             response = await WebToApp.create(args);
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateSkinDomain: async (_, args, context) => {
  //   try {
  //     let now = Date.now();
  //     let response = null;
  //     if(args.id) {
  //       if(args.platform == 'cafe24') {
  //         response = await Cafe24Skin.findOneAndUpdate({_id : args.id}, args, function(err, doc) {
  //           if(err) return err;
  //         });
  //       }
  //       else {
  //         args.platform = 'godo';
  //         response = await GodoSkin.findOneAndUpdate({_id : args.id}, args, function(err, doc) {
  //           if(err) return err;
  //         });
  //       }
  //     }
  //     else {
  //       args.updated_at = now;
  //       args.$inc = {conCount:1};
  //         args.domainUrl = args.domainUrl.replace('www.', '');
  //         args.domainUrl = args.domainUrl.replace('m.', '');
  //       if(args.platform == 'cafe24') {
  //           response = await Cafe24Skin.findOneAndUpdate({domainUrl : args.domainUrl}, args, {returnNewDocument: true, upsert: true, setDefaultsOnInsert: true});
  //       }
  //       else {
  //         args.platform = 'godo';
  //           response = await GodoSkin.findOneAndUpdate({domainUrl : args.domainUrl}, args, {returnNewDocument: true, upsert: true, setDefaultsOnInsert: true});
  //
  //         //response = await GodoSkin.create(args);
  //       }
  //
  //     }
  //
  //     return response;
  //
  //   } catch(e) {
  //     return e;
  //   }
  // },
  //
  // updateSkin: async (_, args, context) => {
  //   try {
  //
  //     let response = null;
  //     if(args.id) {
  //       if(args.platform == 'cafe24') {
  //         response = await Cafe24Skin.findOneAndUpdate({_id : args.id}, args, function(err, doc) {
  //           if(err) return err;
  //         });
  //       }
  //       else {
  //         args.platform = 'godo';
  //         response = await GodoSkin.findOneAndUpdate({_id : args.id,}, args, function(err, doc) {
  //           if(err) return err;
  //         });
  //       }
  //     }
  //     else {
  //       if(args.platform == 'cafe24') {
  //         response = await Cafe24Skin.create(args);
  //       }
  //       else {
  //         args.platform = 'godo';
  //         response = await GodoSkin.create(args);
  //       }
  //
  //     }
  //
  //     return response;
  //
  //   } catch(e) {
  //     return e;
  //   }
  // },
  //
  //
  // updateBoard: async (_, args, context) => {
  //     try {
  //         let userId = context.user.id ? context.user.id : args.author;
  //         let response = null;
  //         if(args.author === 'aaddmmiinnn') {
  //             userId = "5d41a521f1a8bab6c7ef3ef3";
  //         }
  //         if(userId) {
  //             args.author = userId;
  //             if(args.id && args.author) {//modify
  //                 args.updated_at = Date.now();
  //                 response = await Board.findOneAndUpdate({_id : args.id, author:args.author}, args, function(err, doc) {
  //                     if(err) return err;
  //                 });
  //             }
  //             else {//add
  //                 response = await Board.create(args);
  //             }
  //         }
  //         else {
  //             if(args.id) {//modify
  //                 args.password = await Bcrypt.hash(args.password, saltRounds);
  //                 response = await Board.findOneAndUpdate({_id : args.id, password:args.password}, args, function(err, doc) {
  //                     if(err) return err;
  //                 });
  //             }
  //             else {//add
  //                 args.password = await Bcrypt.hash(args.password, saltRounds);
  //                 response = await Board.create(args);
  //             }
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  //
  // updateBoardComment: async (_, args, context) => {
  //     try {
  //         let userId = context.user.id ? context.user.id : args.author;
  //         let response = null;
  //         if(!args.depth) {
  //             args.depth = args.parentId ? 2 : 1;
  //         }
  //
  //         if(userId) {
  //             args.author = userId;
  //             if(args.id && args.author) {//modify
  //                 args.updated_at = Date.now();
  //                 response = await BoardComment.findOneAndUpdate({_id : args.id, author:args.author}, args, function(err, doc) {
  //                     if(err) return err;
  //                 });
  //             }
  //             else {//add
  //                 response = await BoardComment.create(args);
  //             }
  //
  //         }
  //         else {
  //             if(args.id) {//modify
  //                 args.password = await Bcrypt.hash(args.password, saltRounds);
  //                 response = await BoardComment.findOneAndUpdate({_id : args.id, password:args.password}, args, function(err, doc) {
  //                     if(err) return err;
  //                 });
  //             }
  //             else {//add
  //                 response = await BoardComment.create(args);
  //             }
  //         }
  //         if(response.depth > 1 && response.parentId) {
  //             let res = await BoardComment.findById(response.parentId).exec();
  //             res.childComments.push(response._id)
  //             response = await BoardComment.findByIdAndUpdate(response.parentId, {childComments:res.childComments}, args, function(err, doc) {
  //                 if(err) return err;
  //             });
  //         }
  //
  //
  //         response.data = response;
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  //
  // updateQuestion: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {data : {}};
  //         if(isAdmin || isAdminPass) {
  //             if(args.id) {//modify
  //                 args.updated_at = Date.now();
  //                 response.data = await Question.findOneAndUpdate({_id : args.id}, args);
  //             }
  //             else {
  //                 let newQuestion = args;
  //                 response.data = await Question.create(newQuestion);
  //             }
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateQuestionGroup: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {data : {}};
  //         if(isAdmin || isAdminPass) {
  //             if(args.id) {//modify
  //                 args.updated_at = Date.now();
  //                 response.data = await QuestionGroup.findOneAndUpdate({_id : args.id}, args);
  //             }
  //             else {
  //                 let newQG = {
  //                     title: args.title,
  //                     questions: []
  //                 };
  //                 response.data = await QuestionGroup.create(newQG);
  //             }
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateFormTemp: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {data : {}};
  //         if(isAdmin || isAdminPass) {
  //             if(args.id) {//modify
  //                 args.updated_at = Date.now();
  //                 response.data = await FormTemp.findOneAndUpdate({_id : args.id}, args);
  //             }
  //             else {
  //                 let checkData = {
  //                     cate_1:args.cate_1
  //                 };
  //                 if(args.cate_2) {
  //                     checkData.cate_2 = args.cate_2;
  //                 }
  //                 if(args.cate_3 && args.cate_3 != 'no') {
  //                     checkData.cate_3 = args.cate_3;
  //                 }
  //                 if(args.cate_4 && args.cate_4 != 'no') {
  //                     checkData.cate_4 = args.cate_4;
  //                 }
  //                 let check = await FormTemp.find(checkData).exec();
  //                 if(check.length === 0) {
  //                     response.data = await FormTemp.create(args);
  //                 }
  //                 else {
  //                     throw new Error('FormTemp Existenced.');
  //                 }
  //
  //             }
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateCounsel: async (_, args, context) => {
  //     try {
  //         let userId = context.user.id;
  //         let response = {data : {}};
  //         if(userId) {
  //             args.user = userId;
  //             if(args.id) {//modify
  //                 args.updated_at = Date.now();
  //                 response.data = await Counsel.findOneAndUpdate({_id : args.id}, args);
  //             }
  //             else {
  //                 response.data = await Counsel.create(args);
  //             }
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateCategory: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {data : {}};
  //         if(true) {
  //             if(args.id) {//modify
  //                 args.updated_at = Date.now();
  //                 response.data = await Category.findOneAndUpdate({_id : args.id}, args);
  //             }
  //             else {
  //                 response.data = await Category.create(args);
  //             }
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //         return response;
  //
  //     } catch(e) {
  //         return e;
  //     }
  //
  // },
  //
  // updateCategoryOrder: async (_, args, context) => {
  //     try {
  //
  //         let isAdmin = context.user.admin;
  //         let response = {data : {}};
  //         if(isAdmin || isAdminPass) {
  //
  //             let order = 1;
  //             for(let index in args.categoryArr) {
  //                 let id = args.categoryArr[index];
  //                 let depth = args.depth;
  //                 let update = {
  //                     order: order
  //                 };
  //                 order++;
  //                 response.data = await Category.updateOne({ _id: id, depth:depth }, update);
  //             }
  //
  //             return response;
  //
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
  // delQuestion: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {};
  //         if(isAdmin || isAdminPass) {
  //             response.data = await Question.deleteOne({_id: args.id});
  //             return response;
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
  // delFormTemp: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {};
  //         if(isAdmin || isAdminPass) {
  //             response.data = await FormTemp.deleteOne({_id: args.id});
  //             return response;
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
  // delCategory: async (_, args, context) => {
  //     try {
  //         let isAdmin = context.user.admin;
  //         let response = {};
  //         if(isAdmin || isAdminPass) {
  //             let target = await Category.findOne({_id: args.id});
  //             response.data = await Category.deleteMany({ $and: [{depth: {$gte: target.depth}}, {cls:target.cls}]});
  //             return response;
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
  //
  // delBoard: async (_, args, context) => {
  //     try {
  //         let response = {};
  //         let userId = context.user.id ? context.user.id : args.author;
  //         if(userId || isAdminPass) {
  //             if(args.author === 'aaddmmiinnn') {
  //                 userId = "5d41a521f1a8bab6c7ef3ef3";
  //             }
  //             response.data = await Board.deleteOne({_id: args.id, author: userId});
  //             return response;
  //         }
  //         else if(args.password) {
  //
  //         }
  //         else {
  //             throw new Error('Invalid auth.');
  //         }
  //
  //     } catch(e) {
  //         return e;
  //     }
  // },
};
module.exports = Mutation;
