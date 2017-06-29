'use strict';
import Sequelize from "sequelize";
import fs from "fs";
import path from "path";
const env = process.env.ENV;
const config = require("./libs/config.js")
const basename = path.basename(module.filename);
let sequelize = null;
let db = null;
module.exports = app => {
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config[env].database,
            config[env].username,
            config[env].password,
            config[env].params
        )
        db = {
            sequelize,
            Sequelize,
            models: {}
        }
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir)
            .filter((file) => {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
            })
            .forEach((file) => {
                let model = sequelize['import'](path.join(dir, file));
                db.models[model.name] = model;
            });
        Object.keys(db.models).forEach(function (key) {
            //console.log("Model Name:", modelName)
            if (db.models[key].associate) {
                db.models[key].associate(db.models);
            }
        });
    }
    return db;
}