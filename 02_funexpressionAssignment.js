console.log("*********************Q1********************");
var square=function(num){
    console.log("square of",num,"is :",num*num);


}


square(5);
square(6);
square(25);
square(100);
console.log("*********************Q2********************");
console.log( "Type Of Function Expression Is:", typeof square );



console.log("*********************Q3********************");
var rectangular =function(length,width){
console.log("Area Of Rectangular Is :",length*width);
}
rectangular(499,917);

console.log("*********************Q4********************");

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