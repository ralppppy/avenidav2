const Sequelize = require("sequelize")

module.exports = new Sequelize(
  "5PxZrcTSSF",
  /*"sql12312375"*/ "5PxZrcTSSF" /*"sql12312375"*/,
  "Neg8cJBaKr" /*"seqRTst4l4"*/,
  {
    host: "remotemysql.com", //"sql12.freemysqlhosting.net",
    dialect: "mysql",
    port: "3306",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1
    },
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/
      ],
      max: 5
    }
  }
)
