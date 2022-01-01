const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   console.log(req.url);
   if(req.url == '/'){
    res.end('Hello from the dark side');
  
   }
  else if(req.url == '/about'){
   
    res.end('Hello from about side');
   
   
   }else if(req.url == '/contactUs'){
    res.end('Contact Us');
    
   }else if(req.url == '/api'){

    fs.readFile('./json/json1.json','utf8',(err,data)=>{
       const stringData = data;
      // const write = JSON.parse(stringData);
        res.end(stringData);
    })
   }else{
       res.writeHead(404);
       console.log("page does't exist");
   }
});

server.listen(3000,'localhost',()=>{
    console.log('listing at post number 3000');
});