const router = require("express").Router();


router.post("/", (req, res) => {
    console.log(req.body)
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      res.redirect('/')
    } else {
      res.status(404).end();
    }
  });
  module.exports= router;