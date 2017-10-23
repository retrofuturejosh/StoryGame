const Sequelize = require("sequelize");
const db = require("./_db");

module.exports = db.define("authors", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.ENUM,
    values: ['red', 'light green', 'dark green', 'light blue', 'thunder blue', 'navy blue', 'purple', 'pink', 'orange', 'black'],
    defaultValue: 'black'
  }
});