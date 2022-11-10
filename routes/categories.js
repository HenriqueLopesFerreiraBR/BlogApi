const router = require("express").Router();
const Category = require('../models/Category');

//_______________________CREATE____________________//

router.post("/", async(req,res)=>{
    const newCategory = new Category(req.body);
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    } catch (error) {
        res.status(500).json(error)
    }

})

//_______________________UPDATE_____________________//
router.put("/:id", async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id);
        if (category.id === req.params.id) {
            try {
                const updateCategory = await Category.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {new: true}
                );
                res.status(500).json(updateCategory);
            } catch (error) {
                res.status(200).json(error);
            }
        } else {
            res.status(401).json("Categoria não existe")
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(200).json(error)
    }

})
//_______________________DELETE_____________________//
router.delete("/:id",async(req,res)=>{
    
})

//_______________________GET________________________//
router.get("/:id", async (req,res)=>{
    try {
        const category = await Category.findById(req.params.id);

        res.status(201).json(category);
    } catch (error) {
        res.status(500).json(error)
    }
})

//_______________________GET ALL_____________________//

router.get("/", async (req,res)=>{
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error)
    }
 
})



module.exports = router;
