
     const add = 5+5;

     const mul = ()=>{
        console.log('what',5*5);
       return 5*5;
    }

////////////////////  for exporting  one /////////
//module.exports = add;


////////////////////  for exporting more than one /////////
module.exports.add = add;
module.exports.mul = mul;

//////////////////////// or ////////
//module.exports = {add,mul};
