const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');
const mongoose = require('mongoose');
const MensRanking = require('./models/mens')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello From The Dark Side");
})

app.post('/mens',async (req,res)=>{
 try{
    const addingMensRecords   = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.send(insertMens);
 }catch(err){
 res.send(err);
 }
})

app.get('/mens',async (req,res)=>{
    try{

       const getMens = await MensRanking.find({}).sort({"ranking":1});
       res.send(getMens);
    }catch{
    res.send(e);
    }
   })  
/////////////individual finding
 

   app.get('/mens/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
       const getMen = await MensRanking.findById({_id:_id});
       res.send(getMen);
    }catch{
    res.send(e);
    }
   })
 
////////////////////Update
   app.patch('/mens/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
       });
       res.send(getMen);
    }catch{
    res.send(e);
    }
   })
///////////////////////delete
app.delete('/mens/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
       const getMen = await MensRanking.findByIdAndDelete(_id);
       res.send(getMen);
    }catch{
    res.send(e);
    }
   })

///////////////////////////////////////
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})



// At the place of req.body
/*{
    "ranking":1,
    "name":"Christian Coleman",
    "dob" : "06 MAR 1996",
    "country":"USA",
    "Score" : "1477"
}*/