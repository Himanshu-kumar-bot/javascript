 
//     const user={
//         username:"Himanshu",
//         price:999,

//         message:function(){
//             console.log(`${this.username}, welcome to website`)   
//             console.log(this);
//             //current conext ki baat karta hai "this"
//         }
//     }
//     user.message()
//     user.username="Golu"
//     user.message()


//     function one(){
//         let username="himanshu"
//          console.log(this.username);
         
//  }
//  one()



// 
// 
// 
// 
// 
// 
// 
// 
//  const one=() => {
//     let username="Himanshu"
//     console.log(this.username);
//  }
//  one()


//  const addTwo=(num1,num2)=>{    //arrow function     //explicit//
//          return num1+num2
//  }

//  console.log( addTwo(4,4));
 

// const addTwo=(num1,num2)=> num1+num2  //impplicit
//   console.log(addTwo(2,3))

//   const addTwo=(num1,num2) => (num1+num2) //implicit
//   console.log(addTwo(2,6))


//    const addTwo=(num1,num2) => ({name:"himanshu"}) 
//     console.log(addTwo(9,8))


const obj = {
  value: 10,
  normalFunc: function() {
    console.log(this.value); // 'this' refers to obj
  },
  arrowFunc: () => {
    console.log(this.value); // 'this' refers to the global scope (window or undefined in strict mode)
  }
};

obj.normalFunc(); // Output: 10
obj.arrowFunc(); // Output: undefined (in non-strict mode) or error (in strict mode)