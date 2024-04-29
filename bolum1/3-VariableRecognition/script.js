
`
There are 3 method of variable recognition:
const, let and var
let can be changed while const can not be changed when you want
`
let day = 2;
let month = 3;
let year = 1990;

console.log(day,month,year);

console.log("Telman Abdulla was born in " + day + "/" + month + "/" + year)

day = 20;
console.log(day);

var pricecar1 = 130000;
pricecar1 = 160000
console.log(pricecar1);

const pricecar = 150000;
// pricecar = 200000;   #will output error in console once activated
console.log(pricecar);



