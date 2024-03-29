require("dotenv").config();

const Sequelize = require("sequelize");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );
//cookies
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveuninitialized: true,
  cookie: {
    maxAge:1000 *60*5,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  
  store: new SequelizeStore({
    db: sequelize,
  }),
};
module.exports = {
  sequelize,
  sess,
};
