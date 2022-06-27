const router = require('express').Router();
const Post = require('../models/Post');



//_____________________________CREATE_________________________________//
router.post("/", async(req,res) =>{
    
    const newPost = new Post(req.body);
    try{

        const savePost = await newPost.save();
        res.status(200).json(savePost);

    }catch(error){
        res.status(500).json(error)
    }
})

//_______________________________UPDATE________________________________//

router.put("/:id", async(req,res) =>{
        try{
            const post = await Post.findById(req.params.id); 
            if (post.username === req.body.username) {
                try {
                    const updatePost = await Post.findByIdAndUpdate(
                        req.params.id, 
                        {
                            $set: req.body,
                        },
                        {new: true}
                    );
                    res.status(200).json(updatePost);
                } catch (error) {
                    res.status(500).json(error);
                }
            }else{
                res.status(401).json("Esse post não existe");
            }
            res.status(200).json(post)
        }catch(error){
            res.status(500).json(error)
        }
})


//______________________________DELETAR POST_______________________________//
 
router.delete("/:id", async(req,res) =>{
        try {            
            const post = await Post.findById(req.params.id);
            if (post.username === req.body.username) {
                try{
                    await post.delete(); 
                    res.status(200).json("Postagem deletada")
                }catch(error){
                    res.status(500).json(error)
                }
            }else{
                res.status(401).json("esse post não existe");
            }
        } catch (error) {
            res.status(404).json(error)
        }   
});

//-----------------------------------GET POST----------------------//

 router.get("/:id", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
});

//________________________________GET ALL POST_______________________//


router.get("/", async (req,res)=>{    
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router 