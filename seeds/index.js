// require all seeds and seed database
const sequelize = require ('../config/connection');
const {User, Blog, Comment} = require('../models');







seedDatabase();