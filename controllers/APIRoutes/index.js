const router = require("express").Router();
const login = require("./login");
const signup = require("./signup");
const logout = require("./logout");
const del = require("./delete");


// log in
router.use('/login',login)
router.use('/signup',signup)
router.use('/logout', logout)
router.use('/delete', del)




module.exports = router 
