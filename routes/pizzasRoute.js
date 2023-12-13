const express =require("express")
 
const router =express.Router();
const Pizza =require("../models/pizzaModel")
 
router.get("/getallpizzas", async(req,res)=>{
   try {
         const pizzas =await Pizza.find({})
         res.send(pizzas)  
   } catch (error) {
      return res.status(400).json({message:error})
   }
})
 
module.exports=router;
































/* srujan  const express = require("express")
const router = express.Router();
const Pizza = require('../models/pizzaModel')

router.get("/getall", async (req, res)=>{
    try {

        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error})
    }
    
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      });
      
});

module.exports = router;*/
