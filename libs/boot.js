module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`Beershop API running on port ${app.get("port")}`);
    });
  });
}
