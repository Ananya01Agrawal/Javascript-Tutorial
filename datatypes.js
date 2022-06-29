//there are two types of datatypes in javascript
//1.primitive Datatype
//2.reference Datatype
/* primitive Datatype consists of:
strings,numbers,boolean,null,undefined,symbol;
reference datatype consists of:
Arrays,object literals,functions,Dates;
*/

//Primitive data types

//String
var name="ananya";
console.log("My String is"+name);
console.log("Data type is" +(typeof name));

//Numbers
let marks=56;
console.log("Data Type is" +(typeof marks));

//null
let nullVar=null;
console.log("Data Type is" +(typeof nullVar));

//undefined

let undef=undefined;
console.log("Data type is" +(typeof undef));

//Reference Data Types
myarr=[1,2,3,4,false,"string"];
console.log("Data type is" +(typeof myarr))

//object literals
let stMarks={
    ananya:78,
    shubham:36,
    Rohan:34
}
console.log(typeof stMarks);

