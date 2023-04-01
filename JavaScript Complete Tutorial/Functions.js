const hello=()=>{
  console.log("Hey how are you . i am good")
}
function onePlusAvg(x,y){
  return Math.round(1+(x+y)/2)
}  
let a=1;
let b=2;
let c=3;
let d=hello();
console.log(d)

console.log("One plus Average of a and b is", onePlusAvg(a,b))
console.log("One plus Average of b and c is", onePlusAvg(a,b))
console.log("One plus Average of c  and a is", onePlusAvg(c,a))
