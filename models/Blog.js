const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{}

Blog.init(
    {
        post_date: {
            type: DataTypes.DATE,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName:'blog'

    }
);

module.exports = Blog
