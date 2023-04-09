const router = require("express").Router();
const { User } = require("../../models");

// log in
router.post('/', async(req,res) =>{
try{
  const incoming = req.body;
  if (!incoming.email || !incoming.password || !incoming.username){
    res.status(400).json({message: "your request to sign up was invalid"})
    return 
  }
  const userData = await User.create({
    username:incoming.username,
    email: incoming.email,
    password: incoming.password
  })
  const plainUser= userData.get({plain:true})
console.log(userData)
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.username = incoming.username;

    res.status(201).json({ user: plainUser, message: "login Created" });
  })
}catch(e){
  res.status(500).json(e, {message: "something went wrong"})
}
})
module.exports = router;