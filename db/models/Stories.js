const Sequelize = require("sequelize");
const db = require("./_db");

module.exports = db.define("stories", {
  title: {
    type: Sequelize.STRING
  },
  currentAuthor: {
    type: Sequelize.INTEGER
  },
  prevAuthor: {
    type: Sequelize.INTEGER
  },
  promptAuthor: {
    type: Sequelize.INTEGER
  }
});