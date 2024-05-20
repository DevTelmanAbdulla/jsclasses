// const error = document.querySelector('p');//will select first p
// console.log(error);

// const error = document.querySelector('.error');//will choose the first class error it encounters
// console.log(error);

// const error = document.querySelector('div.error');//will choose the error inside the div
// console.log(error);

// const errors = document.querySelectorAll('p');//will choose all p label
// console.log(errors);


const errors = document.querySelectorAll('p');//will choose all p label
// console.log(errors[1]);   //will output as HTML

// ---foreach----

errors.forEach(error =>{
 console.log(error);
}
)