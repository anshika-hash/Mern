const http = require('http');
const fs = require('fs');
const requests = require('requests');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=muzaffarnagar&appid=2f47517e48c8c50028dd02a51e5cfd7f';


const homefile = fs.readFileSync('./WeatherApi/html.html','utf8');

const replaceVal = (tempVal,orgVal)=>{
    let temperature = tempVal.replace('{%tempval%}',orgVal.main.temp);
    let  location  = tempVal.replace('{%location%}',orgVal.name);
    let tempmin = tempVal.replace('{%tempmin%}',orgVal.main.temp_min);
    let tempmax = tempVal.replace('{%tempmax%}',orgVal.main.temp_max);
    let country = tempVal.replace('{%country%}',orgVal.sys.country);
    return temperature;
    
}


const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Hello from the dark side');
        requests(url).on('data',function(data){
            console.log(data);
            const objdata = JSON.parse(data);
            const arrData = [objdata];

            const realTimeData = arrData.map((val)=>{
                console.log(val.main);
            });

            console.log(arrData);
            console.log(arrData[0].main.temp);
const realTimeData = arrData.map((val)=>{
    replaceVal(homefile,val).join('');
    res.write(realTimeData);
})
        }).on('end',function(err){
            if(err) return console.log('connection closed');
            console.log('end');
            res.end();
        });
    }
});



server.listen(3000,'localhost');