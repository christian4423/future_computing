"use strict";
module.exports = function (sequelize, DataTypes) {
    var Roles = sequelize.define("Roles", {
        roleid: {
            type: DataTypes.INTEGER,
            field: 'role_id',
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: DataTypes.STRING({length: 15}),
            field: 'role',
        }
    }, {
            classMethods: {
                associate: function (models) {
                    Roles.hasOne(models.UserRole, {onDelete:"cascade", hooks: true, onUpdate: "CASCADE", foreignKey: 'role_id', as: "Role" })
                }
            },
            tableName: "Roles",
            timestamps: false
        });
    Roles.removeAttribute("id");
    return Roles;
};