
const router = require('express').Router();
const User = require('../models/User');




//----------------------------UPDATE------------------------------//

router.put("/:id", async(req,res) =>{
    if (req.body.userId) {
        
    }

    try{

    }catch(error){
        res.status(500).json(error)
    }
})


//-----------------------------DELETAR------------------------------//




module.exports = router 