import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
  if (!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    const styleModel = path.join(__dirname, "models/styles.js");
    const model = sequelize.import(styleModel);
    db.models[model.name] = model;
  }
  return db;
};
