const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define('User',{

    id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type :DataTypes.STRING,
        allowNull : false
    },
    userId :{  // Ajoutez la clé étrangère
        type : DataTypes.INTEGER,
        references : {
            model :'Users',
            key : 'id'
        },
        unique: true // Assure qu'un profil n'est associé qu'à un utilisateur
    }
});



module.exports = User;