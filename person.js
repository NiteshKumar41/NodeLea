// const person={
//     name: 'john',
//     age: 30
// }

//module wrapper function
//  like :- function(exports,require,module, __filename, __dirname)
//   console.log(__dirname, __filename);

class Person{
    constructor (name,age){
        this.name = name,
        this.age = age
    }
    greeting(){
        console.log(`my name is ${this.name} ang age is ${this.age}`);
    }
}
module.exports =Person;