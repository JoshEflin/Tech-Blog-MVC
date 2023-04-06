const router = require('express').Router();
const Comment= require('../../models/Comment');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req,res)=>{
    const newCommentData = await Comment.create(req.body)
    newCommentData.get({plain:true})
    res.status(200).json(`${newCommentData}`)
})

module.exports= router