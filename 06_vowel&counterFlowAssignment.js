console.log(`££££££££££££££££££££££££££££`);
console.log(`1)`);
var akash = "I am very  good IT Developer";
var counter = 0;
for (let index = 0; index <= akash.length; index++) {
    var char = akash.charAt(index);
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        counter = counter + 1;
        // console.log(char);
    }

}
console.log(`Given string is : "I am very  good IT Developer"`);

console.log(`Total vowels in string is : ${counter}`);
console.log(`££££££££££££££££££££££££££££`);
console.log(`2)`);
var sum = 0;
function ak(value) {
    var result = value * value * value;
    console.log(`cube of ${value} is:`, result);
    sum = sum + result;

}

ak(1);
ak(2);
ak(3);
ak(4);
ak(5);
console.log(`the sum of number from 1 to 5 is ::`, sum);
console.log(`££££££££££££££££££££££££££££`);
console.log(`3)`);
function oddPositionChars(akash){
    let result=" ";
    let spaceRemovingstr=akash.split(" ").join("");
    for (let index = 0; index <spaceRemovingstr.length; index++) {
        
        if (index% 2 !=0) {
            result =result + spaceRemovingstr[index]
        }
   
    }
    console.log(`odd position char without space:`,result);
}
oddPositionChars("Hard work always pays back")
oddPositionChars("Soon i Will Be Angular It Champ")

console.log(`££££££££££££££££££££££££££££`);
console.log(`4)`);


function factorialNumber(value){
    var fact=1;
for (let index = 1; index <=value; index++) {
    fact=fact*index;
    
}
console.log(`The factorial of given ${value} is :`,fact);
return fact;
}
factorialNumber(5)
factorialNumber(7)
factorialNumber(8)
factorialNumber(12)