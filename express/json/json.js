
const student = {
    name:'Anshika Tyagi',
    age : 20,
    dob : '14 April 2001',
    course : 'B.tech',
    languages : [['c','c++','java','python'],['php','mysql'],['bootstrap','css','javascript','html','jquery']]
    
}


const jsonStringify = JSON.stringify(student);


console.log(jsonStringify);
//console.log(jsonParse);
//const jsonParse = JSON.parse(jsonStringify);
//console.log(jsonParse['age']);

const fs = require('fs');
fs.writeFile('./json/json1.json',jsonStringify,(err)=>{
    console.log('file created and json in stringify format has been added');
})

fs.readFile('./json/json1.json','utf-8',(err,data)=>{
   // console.log(data);
   const object = JSON.parse(data);
})