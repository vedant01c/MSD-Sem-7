const path = require('path');

console.log("Directory name:", path.dirname('/home/user/project/file.txt'));

console.log("File name:", path.basename('/home/user/project/file.txt'));

console.log("File extension:", path.extname('/home/user/project/file.txt'));

console.log("Joined path:", path.join('/home/user', 'project', 'file.txt'));

console.log("Absolute path:", path.resolve('file.txt'));