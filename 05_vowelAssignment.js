console.log(`String1:"I AM Learning Javascript ,The Language of Internet"`);
function akash(sentence){
    var counter = 0;
    for (let index = 0; index < sentence.length; index++) {
        var char = sentence.charAt(index);
        if (char==`a` || char==`A` ) {
            // console.log(char);
        counter = counter +1;
        // console.log(counter);
        }
       
}
console.log(`Total Number of a/A in string is : ${counter}`);
}
akash("I AM Learning Javascript ,The Language of Internet")
console.log(`*****************************************************`);
console.log(`String2: "My faverite movie is LAggAn"`);
akash("My faverite movie is LAggAn")
