const fs = require('fs');

const writestream = fs.createWriteStream("output.txt");

writestream.write("Hello, Snehal here\n");
writestream.write("I am pursuing Computer Science degree")

writestream.end()
writestream.on('finish',()=>{
    console.log("File written successfully!")
})