console.log("this is tutorial53");


function greet(name, greetText = "greeting from javascript") {

    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + "is a good boy");

}



function sum(a, b, c, d) {


    let e = a + b + c + d;
    return e;

    //not return unrechible code
    // console.log("function is returnVal");
}

let name1 = "harry";
let name2 = "raj";
let name3 = "aman";
let name4 = "lalit";
let name5 = "shivam";

let greetText1 = "Good Morning";

greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4, greetText1);
//let returnVal = greet(name5);


// console.log(returnVal);



let returnVal = sum(1, 2, 3, 4);
console.log(returnVal);

// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");
// console.log(name5 + "is a good boy");