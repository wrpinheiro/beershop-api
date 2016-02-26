module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`Beershop API running on port ${app.get("port")}`);
  });
}
