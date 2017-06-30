"use strict";
module.exports = function (sequelize, DataTypes) {
    var UserRole = sequelize.define("UserRole", {
        user_id: {
            type: DataTypes.INTEGER,
            feild: "user_id",
        },
        role_id: {
            type: DataTypes.INTEGER,
            feild: "role_id",
        }
    }, {
            classMethods: {
                associate: function (models) {
                        UserRole.belongsTo(models.Users, { foreignKey: 'user_id', as: "User", onDelete:"SET NULL", onUpdate: "CASCADE", hooks: true }),
                        UserRole.belongsTo(models.Roles, { foreignKey: 'role_id', as: "Role", onDelete:"NO ACTION", onUpdate: "CASCADE", hooks: true  })
                }
            },
            tableName: "UserRole",
            timestamps: false
        });
    return UserRole;
};