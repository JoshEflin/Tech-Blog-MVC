const router = require("express").Router();

router.get('/',  async(req, res) => {
  res.render('home', {name:"crab bess"})
})

router.get('/login', async(req, res)=>{
    res.render('login',{name: 'herp'})
})

module.exports = router;
