const fs = require('fs');
const path = require('path');
   // FileSystem =>fs
//create a folder
// fs.mkdir(path.join(__dirname,'/test'), {}, (err) => {
// if(err) throw err;
// console.log('folder created successfully');
// });

// create and write  to file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world', (err)=>{
//     if(err) throw err;

//     console.log('text edited success');
// } )


//append file


// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I am trying to learn ', (err)=>{
//     if(err) throw err;

//     console.log('text edited success');
// } )


//read File

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err, data)=>{
    if(err) throw err;
    console.log(data);
} )


///Rename the fileName

fs.rename(path.join(__dirname,'/test','hello.txt'), path.join(__dirname,'/test','hiworld.txt'),(err)=>{
    if(err) throw err;
    console.log('rename sucsess');
})