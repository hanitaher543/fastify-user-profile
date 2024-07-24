const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define('Profile',{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    bio : {
        type : DataTypes.STRING,
        allowNull : false
    }

});



module.exports = Profile;