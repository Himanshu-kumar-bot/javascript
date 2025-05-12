 //  Imdediately invoked function expressions

 (function chai (){
     console.log(`DB connected`);
 })();


  (  (name) =>{
     console.log(`DB connected Two ${name}`);
 })("himanshu")