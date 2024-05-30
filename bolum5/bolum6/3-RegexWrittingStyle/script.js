const username = '1telman';
const pattern = /^[a-z]{6,10}$/;



//1-st way (and best way) to print succeed or failed
// let res = pattern.test(username);
// console.log(res);
// if(res){
//     console.log("Succeed!");
// }
// else{
//     console.log("Failed!");
// }


//2nd way to print succeed or failed
// will be printed 0 and over 0 if succeed otherwise will be printed -1
let res = username.search(pattern);
console.log(res);