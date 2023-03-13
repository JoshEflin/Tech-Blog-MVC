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
          attributes: ['title','text_content','post_date'],
        },
      ],
    });
    console.log(req.session)
    plainPost= userPosts.get({plain:true})
    console.log(plainPost)
   res.render('dashboard',{
      user,
      plainPost
    })
  })
module.exports = router