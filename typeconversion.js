// in java script if we want to convert one datatype to other then we use the type conversion.

//Type conversion
console.log('welcome to the tut5');
let myvar;
myVar=String(67);//here we are converting var to the string
//console.log(myVar,(typeof myVar));
let booleanVar=String(true);
//console.log(booleanVar,(typeof booleanVar));

let date=String(new Date());
//console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
//console.log(arr.length,(typeof arr));
let i=74;
//console.log(i.toString())

let stri=Number("3434");
stri=Number("343d4");
stri=Number(false);
stri=Number([1,2,3,4,5,6,7,8,9]);
//console.log(stri,(typeof stri));

let number=parseFloat('34.0908');
console.log(number.toFixed(2),(typeof number));

//type coercion
let mystr="678";
let mynum=45;

console.log(mystr+mynum);