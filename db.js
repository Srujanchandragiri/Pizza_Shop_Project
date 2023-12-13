const mongoose=require("mongoose")
 
var mongoURL='mongodb+srv://Srujan:Srujanc12@atlascluster.gjrriix.mongodb.net/mern-pizza'
 
mongoose.connect(mongoURL ,{useUnifiedTopology:true ,useNewUrlParser:true})
 
var db =mongoose.connection
 
db.on('connected' ,()=>{
    console.log('Mongodb connection sucessfully database')
})
 
db.on('error' ,()=>{
    console.log('mongoDB Connection failed')
})
 
module.exports = mongoose




































/* srujan   const mongoose=require("mongoose");
var mongoURL = 'mongodb+srv://Srujan:Srujanc12@atlascluster.gjrriix.mongodb.net/mern-pizza'
mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})
var db=mongoose.connection
db.on('connected',()=>{
    console.log('Mongo DB Connection Successful');

})
db.on('error',()=>{
    console.log('Mongo DB Connection failed');
})
module.exports=mongoose */