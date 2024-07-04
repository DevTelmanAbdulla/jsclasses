localStorage.setItem('name','Scarlett');
localStorage.setItem('age','35');


let firstName = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(firstName,age);

//change the values by different ways
// localStorage.setItem('name','Megan Fox');
// localStorage.age = 36;

// firstName = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(firstName,age);  


//delete
// localStorage.removeItem('name');


//user out olanda clear edirsen butun property silinsin
localStorage.clear()
firstName = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(firstName,age);
