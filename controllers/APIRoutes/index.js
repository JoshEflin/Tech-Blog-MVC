const router = require('express').Router();

router.post('/login', async(req,res) =>{
    const newUserData = req.body
    console.log(newUserData)
})