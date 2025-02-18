const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const logger = require("morgan");

const multer = require("multer");
// const multerS3 = require("multer-s3");

const fs = require("fs");
const path = require("path");
const btoa = require("btoa");
const Q = require("q");
const moment = require("moment");

const useragent = require("express-useragent");

const graphqlPath = "/museumplay/gr";
const port = "4183";

const app = express();
app.use(cors());
app.use(useragent.express());
app.use(express.json());
app.use(logger("dev"));

require("./lib/config");

const typeDefs = require("./api/schema"); 
const resolvers = require("./api/resolvers");

// const AuthOperationArr = [
//     'getMe', 'getRfAuth', 'updateMe', 'updatePW',
//     // 'getCounsel',
//     // 'updateCollection', 'updateRank', 'updateItem', 'updateCounsel',
//     // 'setRankOrderNum', 'setCategory'
// ];
// const AdminAuthOperationArr = ['updateMainSlide', 'delMainSlide'];
// const loaders = require('./lib/loaders');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    let user = {};
    const ua = useragent.parse(req.headers["user-agent"]);
    user.ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    user.deviceType = ua.isMobile ? "mobile" : "pc";
    let tokens = {};

    return { user, tokens };
  },

  introspection: true,
  playground: true,

  // formatError: (err) => {
  //     // Don't give the specific errors to the client.
  //     //console.log(err.extensions);
  //     delete err.extensions;
  //     if (err.message.startsWith("Database Error: ")) {
  //         return new Error('Internal server error');
  //     }
  //
  //     // Otherwise return the original error.  The error can also
  //     // be manipulated in other ways, so long as it's returned.
  //     return err;
  // }
});

app.get("/", function (req, res) {
  res.redirect("/museumplay/goryeo-ro");
});

app.use("/museumplay/goryeo-ro", express.static("public/dist"));
// app.get('/museumplay', function(req, res) {
//     res.redirect('https://modu.museum.go.kr/together/museum_play');
// });

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             let target = req.body.target || moment().format('YYYYMMDD');
//             let now = new Date();
//             let yyyymmdd = btoa(now.toISOString().slice(0,10).replace(/-/g,"")).replace('=', '');
//             let fullPath = 'storage/' + target +'/' + yyyymmdd + '/';
//             // let serverPath = 'http://localhost:' + port + fullPath;
//             if(!fs.existsSync(fullPath)) {
//                 fs.mkdir(fullPath, {recursive: true}, function(err){
//                     console.log(err);
//                     // if(err) throw err;
//                 });
//             }
//
//             if(target === 'profile') {
//                 cb(null, fullPath);
//                 // fs.unlink(fullPath + file.originalname, function(err){
//                 //     //console.log(err);
//                 //     cb(null, fullPath);
//                 // });
//             }
//             else {
//                 cb(null, fullPath);
//             }
//         },
//         filename: function (req, file, cb) {
//             let filename = file.originalname.split('.')[0];
//             let exe = file.mimetype.replace('image/', '').replace('+xml', '');
//             cb(null, filename + '.' + exe)
//         },
//         limits: { fileSize: 5 * 1024 * 1024 }
//     })
// });

// 파일 업로드 설정
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    let target = req.body.target || moment().format("YYYYMMDD");
    let now = new Date();
    let yyyymmdd = btoa(
      now.toISOString().slice(0, 10).replace(/-/g, "")
    ).replace("=", "");
    let fullPath = "storage/photo/" + target + "/" + yyyymmdd + "/";
    if (!fs.existsSync(fullPath)) {
      await fs.promises.mkdir(fullPath, { recursive: true });
    }
    cb(null, fullPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // 고유한 파일명 설정
  },
});

const upload = multer({ storage: storage });

app.use("/museumplay/storage/photo", express.static("storage/photo"));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.post("/museumplay/upload", upload.single("file"), (req, res) => {
  // console.log("File uploaded:", req.file);
  // let filename = file.originalname.split('.')[0];
  // let exe = file.mimetype.replace('image/', '').replace('+xml', '');
  res.json({
    message: "File uploaded successfully!",
    file: req.file,
    prePath: "/museumplay/photo",
  });
});

// app.post('/museumplay/upload', upload.array('file'), function(req, res){
//     for(let i in req.files) {
//         req.files[i].server = 'https://localhost:' + port;
//     }
//     res.send(req.files);
// });

server.applyMiddleware({ app, path: graphqlPath, playgroundPath: graphqlPath });

app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}`)
);
