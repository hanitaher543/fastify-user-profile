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



module.exports = Profile;