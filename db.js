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
    const beerModel = path.join(__dirname, "models/beers.js");
    const breweryModel = path.join(__dirname, "models/breweries.js");

    let model = sequelize.import(styleModel);
    db.models[model.name] = model;

    model = sequelize.import(beerModel);
    db.models[model.name] = model;

    model = sequelize.import(breweryModel);
    db.models[model.name] = model;

  }
  return db;
};
