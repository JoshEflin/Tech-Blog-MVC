const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    console.log(req.body);
  
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!userData) {
        res.status(400).json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      const validPassword = userData.comparePassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.username = userData.username;
  
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  });

  module.exports= router;