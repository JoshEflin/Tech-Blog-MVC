const path = require('path');
const express = require('express');
require('dotenv').config();

// import express session and store sequelize connection to new class type
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// express session and handlebars
const exphbs = require('express-handlebars');

// const router = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers';)

const app = express();
const PORT = process.env.PORT || 3001;

//cookies 
const sess = {
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveuninitialized:true,
    cookie:{},
    store: new SequelizeStore({
        db:sequelize
    })

};
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(router);
// app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(` Now Listening on port ${PORT}`));
});