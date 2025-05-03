  const mySym= Symbol("key1")
  
  const user={
    name:"himanshu",
    "full name": "Hiamnshu kumar",
    age:18,
    email:"himanshu@gmail.com",
    "location":"jaipur",
    loggedIn:true,
    lastLoginDays:["Monday","Saturday"],

    [mySym]:"myKey"

  }
  console.log(user.age);
  console.log(user.email);
  console.log(user["email"]);
  console.log(user["full name"]);

  console.log(user.mySym)  //typeof -> String not symbol without square backets  && it give undefined when declare as a symbol([mySym])

  console.log(user[mySym])  //myKey

  user.email="chatgpt.com"
 console.log( user.email)

//  Object.freeze(user);

 user.email="golu#gmail.com"

 console.log(user);

 user.greeting=function(){    //add a function in object user
    console.log("Hello, JS user"); 
    
 }
 user.greeting()

user.greetingTwo=function(){
  console.log(`Hello, JS user, ${this["full name"]}`);
  
}
user.greetingTwo();


 
  
  
  