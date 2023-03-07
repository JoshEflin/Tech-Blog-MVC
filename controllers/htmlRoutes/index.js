const router = require('express').Router()

router.get('/',  async(req, res) => {
  res.render('login', {name:"crab bess"})
})

module.exports = router;