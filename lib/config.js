const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const url =
  process.env.NODE_ENV === "production"
    ? "mongodb://172.16.5.102:38128/goryeo"
    : "mongodb://127.0.0.1:27017/goryeo";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
