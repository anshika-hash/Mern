const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Anshika770:5433728a@cluster0.rronz.mongodb.net/olympics?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection is sucessful");
}).catch((e)=>{
    console.log('Not connected');
});


//,useCreateIndex:true,useFindAndModify:false

//mongodb+srv://Anshika770:<password>@cluster0.rronz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority