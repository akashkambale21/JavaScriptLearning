console.log("--------------Question 1st--------------");
console.log("javascript");
console.log("React");

console.log("--------------Question 2nd--------------");

function hello(myname){
    console.log(myname);
}
hello(" My First Name= Akash");

function hey(myname){
    console.log(myname);
}
hey(" My Last Name= kambale");
hey("Fabtech Technical Campus College of Engineering Sangola");

console.log("--------------Question 3rd--------------");


// var a = "virat";
// var b = "Anushka";
// console.log("======before swaping======");
// console.log(a,b);
// var c=a;
// a=b;
// b=c;
// console.log("======After swaping======");
// console.log(a,b);
function swapvalue(value1,value2){
    console.log("======before swaping======");
    console.log(value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("======After swaping======");
    console.log(value1,value2);
    }
    swapvalue("Virat","Anushka");
function swapvalue(value1,value2){
console.log("======before swaping======");
console.log(value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("======After swaping======");
console.log(value1,value2);
}
swapvalue(1000,2000);
console.log("--------------Question 4th--------------");
function add(val1,val2,val3){
    console.log(val1 + val2 + val3);
    return "addthreenumber"
}
add(10.23,600,40);
add("Hello","Good","Morning")