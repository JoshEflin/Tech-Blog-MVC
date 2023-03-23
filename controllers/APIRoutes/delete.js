const router = require("express").Router();
const {Blog} = require('../../models/');

router.delete('/', async (req, res) =>{
    console.log(req.body)
    try{
     const blog = await Blog.destroy({
        where: {
            id: req.body.id,
        },
    })
    console.log(blog)
    res.json(blog)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;