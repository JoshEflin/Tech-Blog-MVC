const path = require("path");
const express = require("express");
require("dotenv").config();

// express session and handlebars
const session = require("express-session");
const exphbs = require("express-handlebars");

const router = require("./controllers");
const helpers = require('./utils/helpers')
const config = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});
app.use(session(config.sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

config.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(` Now Listening on port ${PORT}`));
});
