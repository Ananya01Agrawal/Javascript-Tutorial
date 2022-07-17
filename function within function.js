var name="global";

function outer(){
    var name="outer";
    var outerVar=10;
    function inner(){
        var innerVar=100;
        var name="inner";
        console.log(name);
    }
    inner();
    console.log(name);
}
//inner();
outer();