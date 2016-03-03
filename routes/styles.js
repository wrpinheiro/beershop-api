module.exports = app => {
  const Styles = app.db.models.Styles;

  app.get("/styles", (req, res) => {
    Styles.findAll({}).then(styles => {
      res.json({styles: styles});
    });
  });
};
