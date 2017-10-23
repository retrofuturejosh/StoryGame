const Sequelize = require("sequelize");
const db = require("./_db");

module.exports = db.define("sessions", {
  title: {
    type: Sequelize.STRING
  },
  numRounds: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM,
    values: ['initializing', 'active', 'complete'],
  }
});