//in this we have talked about different sttring methods and functions
console.log("we are at tut6");
const name="ananya";
const greeting='Good Morning';
console.log(greeting+''+name);//this will return the Good Morning ananya

let html;
html="<h1> this is heading </h1>"
    "<p> this is my para </p> ";
html=html.concat('this', 'str2');//concat function is used to add the two string
console.log(html);
console.log(html.length);//gives the length of the string
console.log(html.toLowerCase());//convert the string to the lower case
console.log(html.toUpperCase());//convert the string to the upper case
console.log(html);

console.log(html[0]);//index value strat from the zero and it return the value present at that the particular index
console.log(html.indexOf('<'));//indexof operator will return the particular index at which the operator is present 
console.log(html.lastIndexOf('<'));// return the index from from last of the string
console.log(html.charAt(3));// it will return the character at the particular index
console.log(html.endsWith(str2));//this will return true or false whether the particular ends with the given strring or not
console.log(html.includes('is'));//it returns true or false whether the particular string is present or not
console.log(html.substring(1,6));// this will return the wstring within the particular range  
console.log(html.slice(0,4));
console.log(html.split());// split function is used to split the string
console.log(html.replace('this','it')// replace function is udee replace the string.
