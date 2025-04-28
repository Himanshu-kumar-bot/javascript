 const name="Himanshu"
 const surName="Kumar"
 console.log(`My name is ${name} and my SurName is ${surName}`)


 const a = "a";
const b = "b";
if (a < b) {
  // true
//   console.log(`${a} is less than ${b}`);
} else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
} else {
//   console.log(`${a} and ${b} are equal.`);
}



console.log(name.length)
console.log(name.indexOf('H'));

const newString=new String("  Himanshu-kumar-bot");
console.log(newString.trim())  //Himanshu-kumar-bot
console.log(newString)  //[String: '  Himanshu-kumar-bot']
console.log(newString.split('-'))//[ '  Himanshu', 'kumar', 'bot' ]
console.log(newString.charAt(3)) //i