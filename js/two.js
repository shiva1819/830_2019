var arr = [];
var obj = {};


arr[0] = "Siva";
arr[1] = 1212;

console.log(arr);


obj["one"] = "one";
obj['two'] = 'two';

console.log(obj);

obj.demo = function(){
    console.log(this.one + "-" + this.two);
}   

obj.demo();

var a = 20; 

function test(a,b){
    console.log(a + b);
    console.log(a) // 2
    var a = 30;
console.log('after decleration' + a); //3
    // return a + b;
}

// console.log(test(20,20) + 10);


test();
console.log(a);