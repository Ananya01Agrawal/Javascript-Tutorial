console.log("we are at tutorial 9");
// In this tutorial we are going to talk about loops . we are having tye three types of loop: for,while,do while

for(let i=0;i<100;i++)
{
    console.log(i);
}
let j=0;
while(j<100){
    console.loj(j+1);
    j+=1;
}
//difference bwtween while an ddo while loop is that that in the do while loop , it will run at least one time whther the conditon is true or false rest the working of the for and while and for loop is the same you can use anyone as per yours condition.while we use tghe do while loop very lees.
//do while loop
let k=0;
do{
    console.log(k+1);
    if(k==5){
        break;//break is ued to come out from the loop condition
    }
    console.log(k+1);
    k+=1;
}while(k<10);

console.log('done')
//accessing the elemnt of the array using the foreach loop
let arr=[3,5,6,7,8,9];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});
//creating an object and then accesssing oits values
let obj={
    name:"Rohan Das",
    age:45,
    type:"Dangerous Programmer",
    os:"Ubuntu"
}
for(let key in obj){
    console.log('the ${Key} of object is ${obj[key]}')
}