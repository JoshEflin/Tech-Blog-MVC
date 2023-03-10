const router = require("express").Router();
const login = require("./login");
const signup = require("./signup");


// log in
router.use('/login',login)
router.use('/signup',signup)



router.post("/logout", (req, res) => {
  console.log(req.body)
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router 
