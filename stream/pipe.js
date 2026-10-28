const fs =require('fs')

const WriteStream= fs.createWriteStream('output.txt');
const readstream = fs.createReadStream('input.txt','utf-8');
readstream.pipe(WriteStream);

WriteStream.on('finish', () => {
    console.log('File copied successfully.');
});