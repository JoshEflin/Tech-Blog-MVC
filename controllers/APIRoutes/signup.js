const router = require("express").Router();
const { User } = require("../../models");

// log in
router.post('/', async(req,res) =>{

  const incoming = req.body;
  if (!incoming.email || !incoming.password || !incoming.username){
    res.status(400).json({message: "your request to sign up was invalid"})
    return 
  }
  const userData = await User.create(incoming)
  const plainUser= userData.get({plain:true})
console.log(userData)
  req.session.save(() => {
    req.session.user_id = incoming.id;
    req.session.logged_in = true;
    req.session.username = incoming.username;

    res.status(200).json({ user: plainUser, message: "login Created" });
  })
})

module.exports = router;