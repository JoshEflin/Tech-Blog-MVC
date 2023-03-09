const router = require("express").Router();

router.get('/',  async(req, res) => {
  res.render('home', {name:"crab bess"})
})
router.get('/signup', async (req, res) =>{
  res.render('signup')
})
router.get('/login', async(req, res)=>{
    res.render('login')
})

module.exports = router;
