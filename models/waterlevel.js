const Sequelize = require("sequelize")
const db = require("../config/database")

const waterlevel = db.define("waterlevel", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  wlmeter: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  wlfeet: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  date: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false
  }
})

module.exports = waterlevel
