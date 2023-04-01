console.log("Javascript tutorial 3: var,let and const")
//var a=45;
let b="ananya";
b=4// it don throw error, it ,means if varisble b is not made declared it
let c=null
const author="anant"
author="ananya"// throws an error because const cannot be updated
let d=undefined
{
  let b= 'this'
  console.log(b)
}

console.log(b)
// var is globally scoped while and let and const is block scoped
// var can be updated and re - declared with its scope
// let cannot be re-declared but can be updated
// const can neither be updated nor can be re-declared
// const must be initialized during the declaration until let and var
