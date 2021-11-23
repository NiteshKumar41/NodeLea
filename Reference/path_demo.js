const path = require('path');

//Basefile name
console.log(__filename);
console.log(path.basename(__filename));

///Directory Name

console.log(path.dirname(__filename));

//file extention

console.log(path.extname(__filename));

//  create path object

console.log(path.parse(__filename));

//concatenate path
//like : ../test/hello.html
console.log(path.join(__dirname,'test','hello.html'));