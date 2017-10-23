const Sequelize = require("sequelize");
const db = require("./_db");

module.exports = db.define("sections", {
  content: {
    type: Sequelize.TEXT
  },
  currentRound: {
    type: Sequelize.INTEGER
  }
});