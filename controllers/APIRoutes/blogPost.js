// grab post by primary Key then change that bitch. then render
const router = require("express").Router();
const {User, Blog, Comment} = require('../../models')
const withAuth = require('../../utils/auth')


router.post('/', withAuth, async(req, res)=>{
    console.log(req.body)
    const newPost = await Blog.create(req.body)
    // console.log('OOPS')
    res.send('ok')

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
// get or post
// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id);

//     if (postData) {
//       const post = postData.get({ plain: true });

//       res.render('edit-post', {
//         layout: 'dashboard',
//         post,
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.redirect('login');
//   }
// });

module.exports=router
