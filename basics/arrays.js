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
 
 console.log(myNarr);   //[ 0, 4, 5 ]
                       // [ 1, 2, 3 ]
 console.log(myNarr4);
 
 
 


 