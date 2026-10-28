// const fs = require('node:fs');

// // const content = 'Some content!';

// // fs.writeFile('text.txt', content, err => {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     console.log("Data Written Successfully")
// //   }
// // });


// fs.writeFile('text.txt', 'Hello Node.js\n', { flag: 'a' }, (err) => {
//     if (err) {
//         console.log('Error:', err);
//         return;
//     }

//     console.log('Data written successfully');
// });


const fs = require("fs");

console.log("===== NODE.JS BUFFER DEMO =====");

const buffer1 = Buffer.from("Hello, Welcome to MERN Development!");

console.log("\n1. Original Buffer:");
console.log(buffer1);

console.log("\n2. Buffer converted to String:");
console.log(buffer1.toString());

console.log("\n3. Buffer Size:");
console.log(buffer1.length, "bytes");

const buffer2 = Buffer.alloc(20);

console.log("\n4. Empty Buffer:");
console.log(buffer2);

buffer2.write("Node.js Buffer");

console.log("\n5. Buffer after writing data:");
console.log(buffer2);

console.log("\n6. Data inside Buffer:");
console.log(buffer2.toString());

console.log("\n7. Individual Bytes:");

for (let i = 0; i < buffer1.length; i++) {
    console.log(`Byte ${i}: ${buffer1[i]}`);
}

buffer2[0] = 78;

console.log("\n8. Buffer after modifying first byte:");
console.log(buffer2.toString());

console.log("\n9. Hexadecimal Representation:");
console.log(buffer1.toString("hex"));

console.log("\n10. Base64 Representation:");
console.log(buffer1.toString("base64"));

const buffer3 = Buffer.from("48656c6c6f", "hex");

console.log("\n11. Buffer created from Hex:");
console.log(buffer3.toString());

const first = Buffer.from("Hello ");
const second = Buffer.from("World!");

const combined = Buffer.concat([first, second]);

console.log("\n12. Combined Buffer:");
console.log(combined.toString());

console.log("\n13. Is buffer1 a Buffer?");
console.log(Buffer.isBuffer(buffer1));

fs.writeFileSync("buffer-output.txt", combined);

console.log("\n14. Buffer data successfully written to file.");