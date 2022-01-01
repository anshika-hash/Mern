const stream = require('stream');
const fs = require('fs');
const server = require('http');


const createServer = server.createServer((req,res)=>{
   console.log('server has been created');
})


createServer.on('request',(req,res)=>{
   
 /*   fs.readFile('./StreamMod/server.txt','utf8',function(err,data){
        if(err){
            return console.error(err);
            res.end(data.toString());
        }
    })*/
    const rstream = fs.createReadStream('./StreamMod/server.txt');
    rstream.on('data',(chuckdata)=>{
        res.write(chuckdata);
    });
    rstream.on('end',(err)=>{
        res.end();

    })
    rstream.on('error',(err)=>{
        console.log(err);
        res.end('file not found!!');

    })
})

createServer.listen(3000,'localhost');