const fs = require("fs");
fs.writeFile("text.txt","write in why Async",(err)=>{
    console.log("the function should be call back",fun());
    console.log(err);
});

function fun(){
    fs.readFile('text.txt','hex',(err,data)=>{
        console.log(data);
        console.log(err);
        fs.mkdir('makedir',(err)=>{
            console.log('your nw folder has been created');
          fs.rename('text.txt','renamed.txt',(err)=>{
              console.log('now your file name is "renamed.txt" name');
                fs.rename('renamed.txt','osmodule.js',(err)=>{
                    console.log('your file name changed');
                })
            }) 
        })
    });
}
