const router = require("express").Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id',withAuth, async(req,res)=>{
    const UID = req.session.user_id;
    const user = req.session.username;
    const userPosts= await User.findByPk(UID, {
      include:[
        {
          model:Blog,
          attributes: ['id','title','text_content','post_date'],
        },
      ],
    });
    console.log(req.session)
    plainPost= userPosts.get({plain:true})
    console.log('\n----------------)')
    const blogs = plainPost.blogs
    console.log(blogs)
    if(req.session.logged_in){
      const session = req.session
      const user = session.username;
      const UID = session.user_id;
      const logged_in = session.logged_in;
    
   res.render('dashboard',{
      user,
      blogs,
      logged_in
    })
  }
  })

module.exports = router