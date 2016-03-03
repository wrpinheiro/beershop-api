module.exports = app => {
  const Styles = app.db.models.Styles;

  app.route("/styles")
    .all((req, res, next) => {
      if (req.body) {
        delete req.body.id;
      }

      next();
    })
    .get((req, res) => {
      Styles.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: "erro"});
        });
    })
    .post((req, res) => {
      Styles.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: "erro criando estilo"});
      });
    });
  app.route("/styles/:id")
    .all((req, res) => {
      if (req.body) {
        delete req.body.id;
      }

      next();
    })
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    });
};
