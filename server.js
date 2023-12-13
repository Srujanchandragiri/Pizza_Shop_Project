const express = require("express");
const Pizza = require('./models/pizzaModel');
const app = express();
const db = require("./db");
app.use(express.json());
 
const pizzasRoute =require('./routes/pizzasRoute')
 
app.use('/api/pizzas/',pizzasRoute)
 
app.get("/", (req, res) => {
    res.send("Server working " + port);
});
 
/*app.get("/getpizzas", async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});*/
 
const port = process.env.PORT || 7000;
 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

































/* re1 srujan const express=require("express");
const Pizza=require('./models/pizzaModel')
const db=require("./db")
const app=express();
app.use(express.json());
const cors = require('cors');

app.use(cors());

const pizzasRoute = require('./routes/pizzasRoute')


app.use('/api/pizzas/', pizzasRoute)

app.get("/",(req,res)=>{
    res.send("Server working 🔥"+port);
});*/


/*app.get("/getpizzas",async (req,res)=>{
   
        try{
            const pizzas = await Pizza.find({});
            res.send(pizzas);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }

    })*/



/* remove 2   const port=process.env.PORT || 4000;
app.listen(port,()=>'Server running on port port 🔥');*/
