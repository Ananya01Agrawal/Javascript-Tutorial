console.log("this is tutorial 8");
// here we have talkse about the if else conditional statement
const age=19;//we have declared a local variable
//const  vari=34;
//const doesDrive=True;
if(age==18){//it means it age is 19 then print the if statement
    console.log("Age is 19");
}
// if we have mor ethan the one condition then we can use the if elif else loop .but first it check the if condition then it check the else if condition and among two none of the condition matches then it print the will print the rlse statement
else if(age!==65){
    console.log("age is 65");
}
else{//else we need to print the else statement
    console.log("Age is not 19");
}

if(typeof vari!=='undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is defined');
}
/* here we have take an example of the or opertor where if any one of the condition is trye then it will return the true statement else it will reyurn the false statemnt
if(doesDrive || age>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
/*
//ternary operator
whenever we talk about the ternary operator it is also known as the conditional statement ,means if the condition is true it will return the sttement whcih is print next to the ? operator and if the condition is false then it will  return the next statement
console.log(age==45?'Age is 45':'Age is not 45')