//         ######    Stack       &         Heap    ###########
   //                  |                     |
/*                     |                     |
                       ^                     ^
                   Primitive           Non-primitive
                               
*/

let myYoutube="himanshukumar"
let myNewYoutube="Himanshu and golu"
myNewYoutube=myYoutube
console.log(myNewYoutube);   //here , a copy of myYoutbe gives to myNewYoutube , So call by value


let team={
    name:"Titan-Army",
    members:15,
    captain:"Hiamnshu"
}
let team2=team
team2.captain="Golu"

console.log(team.captain);
console.log(team2.captain);

