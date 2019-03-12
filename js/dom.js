// slector s

// document.getElementById('one');
// document.getElementsByClassName('one')[4];
// document.getElementsByTagName('div')[0];
// document.querySelectorAll('.demo');


// content  
var DemoId = document.getElementById('demo');
var DemoClass = document.getElementsByClassName('one')[0];

DemoId.innerText = "<h2>HELLO THIS IS DOM HEADER</h2>";
DemoId.innerHTML = "<a href='s#'>HELLO THIS IS DOM HEADER</a>";
console.log(DemoId.innerHTML);

var bindData = document.getElementById('bindData');
var obj = {name:"Shiva", lastName:"prasad"};

document.getElementsByTagName('td')[0].innerText = obj.name;
document.getElementsByTagName('td')[1].innerText = obj.lastName;



var test = (function(){
    var obj = {};
    var demo12312 = 123;
    alert(demo12312);
    obj.abcd = demo12312;

    return obj;
});

console.log(test().abcd);