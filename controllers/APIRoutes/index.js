const router = require("express").Router();
const login = require("./login");
const signup = require("./signup");
const logout = require("./logout");
const del = require("./delete");
const comment = require('./comment')
const blogPost = require('./blogPost')

// log in
router.use('/login',login)
router.use('/signup',signup)
router.use('/logout', logout)
router.use('/delete', del)
router.use('/comment', comment)
router.use('/blogPost', blogPost)




module.exports = router 
