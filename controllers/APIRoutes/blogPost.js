// grab post by primary Key then change that bitch. then render
const router = require("express").Router();
const {User, Blog, Comment} = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', withAuth, async(req, res)=>{
    console.log(req.body)
    const newPost = await Blog.create(req.body)

    res.json({mesage:'ok'})

})

router.put('/edit/:id', withAuth, async(req, res)=>{
    console.log('WORKING')
    const newContent = req.body.text_content
    const blogPost = await Blog.findByPk(req.body.id)

    if (!blogPost){
        return res.status(404).json({message:"blogpost not found"})
    };
    const revision = await Blog.update({
        text_content: newContent
    },
    {
        where: {id: req.body.id}
    })
    // console.log(edittedPost)
    res.json({meesage:'post revised'})

})


module.exports=router
