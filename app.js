var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
var a = Number(input[0]);
var b = Number(input[1]);
var obj=new Object();


obj.swapNumbers = function() 
{

var temp;
temp=a;
a=b;
b=temp;

console.log(a);
console.log(b);
};

obj.swapNumbers();