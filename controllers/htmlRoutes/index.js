const router = require("express").Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const blogposts = require('./blogposts');


router.use('/blogposts',blogposts);

router.get('/dashboard',withAuth,  async(req, res) => {
  // retrieve login info and store to variables
  const session = req.session
  const user = session.username;
  const UID = session.user_id;
  const logged_in = session.logged_in;
  
  res.render('home',{
    user,
    UID,
    logged_in
  })
});

router.get('/',  async(req, res) => {
  const blogRend = await Blog.findAll({
    attributes: ['id', 'title', 'post_date', 'text_content'],
    order: [['post_date', 'DESC']],
    include: {
      model: User,
      attributes: ['username'],
  }  
  });
  if(!blogRend){
    return res.status(404).json({message:'Josh did not seed the database'})
  };
  const plainPosts = blogRend.map((post) => {
    return post.get({plain:true});
    });
    console.log(plainPosts)
  // retrieve login info and store to variables
  if(req.session.logged_in){
  const session = req.session
  const user = session.username;
  const UID = session.user_id;
  const logged_in = session.logged_in;
  return res.render('home',{
    plainPosts,
    user,
    UID,
    logged_in
    });
  } else {
  const user = 'Guest';
  const UID = 'Guest';
  const logged_in = false;
  return res.render('home',{
    posts,
    user,
    UID,
    logged_in
  });
};

})
router.get('/signup', async (req, res) =>{
  res.render('signup')
});
router.get('/login', async(req, res)=>{
    res.render('login')
});

module.exports = router;
