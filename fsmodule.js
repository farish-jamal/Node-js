const fs = require('fs');

// const a = fs.readFileSync('new.txt', 'utf-8', (err, data)=> {
//     console.log(err, data);
// })

const a = fs.readFileSync('new.txt');
console.log(a.toString());

// fs.writeFile('file.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// })
const b = fs.writeFileSync('file.txt', "This is a data3");
console.log(b)

console.log("Done reading")
