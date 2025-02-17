const Sequelize = require("sequelize");
// let casual = require('casual');
const _ = require("lodash");

const qna = new Sequelize("qna", null, null, {
  dialect: "sqlite",
  storage: "./db/qna.sqlite",
});

const QnaModel = qna.define("qna", {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

QnaModel.sync({ force: false }).then(() => {});

const Qna = qna.models.qna;

module.exports = { Qna };
