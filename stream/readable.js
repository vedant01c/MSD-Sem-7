const fs = require('fs')
const readtream=fs.createReadStream('output.txt','utf-8');
readtream.on('data',(chunk)=>{
    console.log(chunk);
})

readtream.on('end',()=>{
    console.log("file read successfully");
})

readtream.on('error',(err)=>{
    console.log(err);
})