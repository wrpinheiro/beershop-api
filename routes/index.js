module.exports = app => {
  app.get("/", (req, res) => {
    res.json({status: "Beershop API"})
  });
};

module.exports = app => {
  const Styles = app.db.models.styles;

  app.get("/styles", (req, res) => {
    Styles.findAll({}).then(styles => {
      res.json({styles: styles});
    });
  });
};
