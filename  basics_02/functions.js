//  function myName(){
//  console.log("H")
//  console.log("H")
//  console.log("H")
//  console.log("H")
//  console.log("H")
//  }
//   (myName())

function addTwoNumbers( a,  b)
{
    if(typeof a ==="number" && typeof b  === "number"){
   return a+b;
}
else{
    // console.log("not a number")
}
}

   const result=addTwoNumbers(3,null)
    // console.log(result)

function enterUserName(username){
    if(!username ){
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in `
}
// console.log(enterUserName("himanshu"));
// console.log(enterUserName());

function calculateCartPrice(...num){  //rest or spread but rest here
    return num
}
console.log(calculateCartPrice(200,300,400));



const user={
    username:"Himanshu",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username:"sam",
    price:399
})


const arr=[1,2,3,4];

function returnSecondValue(nums){
    return nums[0];
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue([1,2,3,4]));