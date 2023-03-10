const router = require("express").Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',withAuth,  async(req, res) => {
  // retrieve login info and store to variables
  const session = req.session
  const user = session.username;
  const UID = session.user_id;
  const logged_in = session.logged_in;
  
  

  res.render('home',{
    user,
    UID,
    logged_in
  } )
})
router.get('/signup', async (req, res) =>{
  res.render('signup')
})
router.get('/login', async(req, res)=>{
    res.render('login')
})

module.exports = router;
