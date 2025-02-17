const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// const statisticsSchema = new Schema({
//     visitId: { type: String, required:true, trim: true},//fpId+date(YYYYMMDDHH)
//     fpId: { type: String, required:true, trim: true},
//     isKiosk: { type: Boolean },
//     connectLocation: { type: String },
//     deviceType: { type: String },
//     ip: { type: String },
//     created_at: {type: Date, default: Date.now}
// }, {collection:'statistics'});
// statisticsSchema.plugin(mongoosePaginate);
// const Statistics = mongoose.model('statistics', statisticsSchema);

const visitSchema = new Schema(
  {
    visitId: { type: String, required: true, trim: true }, //fpId+date(YYYYMMDDHH)
    fpId: { type: String, required: true, trim: true },
    isKiosk: { type: Boolean, default: false },
    location: { type: String },
    deviceType: { type: String },
    year: { type: Number },
    week: { type: Number },
    month: { type: Number },
    day: { type: Number },
    hour: { type: Number },
    ip: { type: String },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "visit" }
);
visitSchema.plugin(mongoosePaginate);
const Visit = mongoose.model("visit", visitSchema);

const userSchema = new Schema(
  {
    visit_id: { type: Schema.Types.ObjectId, ref: "visit" },
    visitCount: { type: Number },
    userName: { type: String, trim: true },
    ticketType: { type: String, trim: true },
    character: { type: String, trim: true },
    currentPoint: { type: String, trim: true },
    discoverArtifact: { type: Object },
    isDoneGuide: { type: Boolean },
    snsId: { type: String, trim: true }, //ex: kko_uuid
    snsType: { type: String, trim: true },
    snsName: { type: String, trim: true },
    birth: { type: Date },
    age: { type: String, trim: true },
    gender: { type: String, trim:true },
    withWhom: { type: String, trim:true },
    consent_given: {type: Boolean},
    lastcon_date: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "user" }
);
userSchema.plugin(mongoosePaginate);
const User = mongoose.model("user", userSchema);

//visit_id:ID, userName: String, photoType: String, explorerDate: String, visitCount: Int, ticketType: String, photoUrl: String, character:String
const ExploreSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "user" },
    userName: { type: String, trim: true },
    photoType: { type: String, trim: true },
    durationMSec: { type: Number, required: true },
    explorerDate: { type: Object, required: true, default: false },
    visitCount: { type: Number, trim: true },
    ticketType: { type: String, trim: true },
    photoUrl: { type: String, trim: true },
    character: { type: String, trim: true },
    hit: { type: Number, default: 0 },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "explore" }
);
ExploreSchema.plugin(mongoosePaginate);
const Explore = mongoose.model("explore", ExploreSchema);

//
//
//
// const conBoardSchema = new Schema({
//     conf: {type: String, trim: true, default: 'board'},
//     name: {type: String, trim: true},
//     key: {type: String, trim: true},
//     group: {type: String, trim: true},
//     perm: {type: Object, trim: true},
//     setting: {type: Object, trim: true},
//     style: {type: Object, trim: true},
//     option: {type: Object, trim: true}
// }, {collection:'Config'});
//
// const configSchema = new Schema({
//     conf: {type: String, trim: true, default: 'board'},
//     name: {type: String, trim: true},
//     key: {type: String, trim: true},
//     group: {type: String, trim: true},
//     perm: {type: Object, trim: true},
//     setting: {type: Object, trim: true},
//     style: {type: Object, trim: true},
//     option: {type: Object, trim: true}
// }, {collection:'Config'});

// name: "문의게시판",
//     group: "cs",
//     perm:{ //-1 :사용안함, 0 : 누구나, 1 : 회원, 2 관리자
//     showList: 0,
//         read: 0,
//         write: 2,
//         replay: -1,
//         comment: -1
// },
// setting: {
//     useUpload:true,
//         pagePerCount:10,
// },
// style: {},
// option:{}

module.exports = {
  Visit,
  User,
  Explore,
};
