"use strict";
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        userid: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            field: 'first_name',
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            field: 'last_name',
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            field: 'email',
            unique: true,
            allowNull: false
        },
        hash: {
            type: DataTypes.TEXT,
            field: 'hash',
            unique: true,
            allowNull: false
        },
        profilepic: {
            type: DataTypes.TEXT,
            field: 'profile_pic',
            defaultValue: "/photos/default.jpg",
            allowNull: true
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Users.hasOne(models.UserRole, { foreignKey: 'user_id', as: "User" })
                }
            },
            tableName: "Users"
        });
    Users.removeAttribute("id");
    return Users;
};