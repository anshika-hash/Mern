const stream = require('stream');
const fs = require('fs');
const server = require('http');


const createServer = server.createServer((req,res)=>{
   console.log('server has been created 3rd time');
})

// 3rd way......
createServer.on('request',(req,res)=>{
 
    const rstream = fs.createReadStream('./StreamMod/server.txt');
  rstream.pipe(res);
})

createServer.listen(3000,'localhost');