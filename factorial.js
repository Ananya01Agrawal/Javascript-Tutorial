// in this we are calculating the factorial of a number

//recursive method
// this is function declaration
var factorial=function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
    /*var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;*/
};
console.log(factorial(5));
// this is function expression where we are calcualting the factorial of a number

var factorial2=function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
};
console.log(factorial(5));