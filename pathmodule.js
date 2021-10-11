const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname('C:\\temp\\myfile.html');
const a4 = path.parse('/home/user/dir/file.txt');
console.log(a1, a2,a3, a4);