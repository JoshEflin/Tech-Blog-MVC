const router = require("express").Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', async (req, res)=>{
    console.log(req.params)
    const post = await Blog.findByPk(req.params.id,{
        attributes:['id','title','post_date','text_content'],
        include: [{
            model:User,
            attributes:['username']
         },
          {
            model:Comment,
            attributes:['text_content','date_created'],
            include: {
                model:User,
                attributes: ['username']

            }
        }]  
    })
    const plainPost = post.get({plain:true})
    console.log(plainPost)
    
    if(!post){
        return res.status(404).json({message:" no blog with this ID"})
    };   
    if(req.session.logged_in){
        const user = req.session.username;
        const UID = req.session.user_id
        return res.render('blogpost',{
            UID,
            user,
            plainPost
    })
    }else {
        return res.redirect('/login')
    }
});
module.exports = router;