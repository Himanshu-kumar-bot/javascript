 let arr=new Array(1,2,3,4)

//  console.log(arr.length); //4
//  console.log(arr.includes(5)) //true or false
//  console.log(arr[0]) //1

 //Arrays Methods
 //1.Push
 arr.push(5);
//  console.log(arr)
 //2.Pop
 arr.pop();
//  console.log(arr)
 
 arr.unshift(2);  //add value at the starting(index 0) of the array
//  console.log(arr);
 arr.shift()
//  console.log(arr)


 //
 const newArr=arr.join()
//  console.log(arr);
//  console.log(typeof arr);
// console.log(newArr);
// console.log(typeof newArr);


//slice and Splice
const myNarr=new Array(0,1,2,3,4,5)
//  const myNarr2 =myNarr.slice(1,3)
//  console.log(myNarr);
//  console.log(myNarr2);
 
  
 const myNarr4 =myNarr.splice(1,3)

//  console.log(myNarr);   //[ 0, 4, 5 ]
                       // [ 1, 2, 3 ]
//  console.log(myNarr4);


//Push -> push in same array and modify it.
const number=[1,2,3,4]
const alphabet=[5,6,7,8]
number.push(alphabet)
// console.log(number)  // [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]
// console.log(number[4][2]) //7



//concat -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const number1=[1,2,3,4]
const alphabet1=[5,6,7,8]
//  const newArray=number1.concat(alphabet1)
//  console.log(newArray);  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 
//spread

const mynewNo=[...number1,...alphabet1]
// console.log(mynewNo);


const anotherArray=[1,2,3,4,5,[6,7,8,9],10,11,[12,13,14,[15,16,17,[18,19,20]]]]
const real_another_array=anotherArray.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Himanshu"))
console.log(Array.from("Himanshu"))
console.log(Array.bind("Himanshu"))

console.log(Array.from({name: "hitesh"})) // interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); 

 
 
 


 