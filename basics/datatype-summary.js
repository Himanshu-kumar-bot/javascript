 // Primitive 
 // 7-types => String , Number , Boolean , null , undefined , BigInt , Symbol


 //Reference (Non-primitive)
 //  => Array , Functions , Object


 /*
JavaScript is a dynamically typed language.
This means that the type of a variable is checked during runtime, 
as opposed to static typing where types are checked during compile time. In JavaScript,
you do not need to explicitly declare the data type of a variable;
it's determined automatically based on the assigned value. 
This allows a variable to hold values of different types throughout its lifespan in a program.



 */

const score=Symbol('123')
const id=Symbol('123')
console.log(score===id);


let heros=["shaktiman","ironman","lokiii", ];
const myfunction=function(){
console.log("hello world");
}

let introduction={
    name:"himanshu",
    age:18,
    hieght:5.6
}
console.log(typeof introduction);
myfunction()


/*
Type	         Result
Undefined    	"undefined"
Null	        "object" (reason)
Boolean     	"boolean"
Number      	"number"
BigInt	        "bigint"
String	        "string"
Symbol       	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object  "object"






*/
