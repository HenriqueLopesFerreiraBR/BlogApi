const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require("bcrypt")



//_____________________________CREATE_____________________________//
router.post("/", async(req,res) =>{
    
    const newPost = new Post(req.body);
    try{

        const savePost = await newUser.save();
        res.status(200).json(savePost);

    }catch(error){
        res.status(500).json(error)
    }
})

//----------------------------UPDATE------------------------------//

router.put("/:id", async(req,res) =>{
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10); 
            req.body.password = await bcrypt.hash(req.body.password, salt)
        } 
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json(updatedUser)
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(401).json("Não foi possivel realizar o update da sua conta");
    }
})


//-----------------------------DELETAR POST------------------------------//
 
router.delete("/:id", async(req,res) =>{
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username}); 
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Usuario foi deletado...")
            }catch(error){
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(404).json("Usuario não encontrador")
        }


    }else{
        res.status(401).json("Não foi possivel realizar o update da sua conta");
    }
});

//-----------------------------------GET POST----------------------//

router.get("/:id", async(req,req)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router 