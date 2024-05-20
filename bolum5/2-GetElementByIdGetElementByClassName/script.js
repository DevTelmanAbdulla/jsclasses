const title = document.getElementById('dom');
console.log(title);

//getelementbyclassname
const errors = document.getElementsByClassName('error');
console.log(errors);

// ---with foreach-> type error
// errors.forEach(error => {
//  console.log(error);
// }
// )

const pLabels = document.getElementsByTagName('p');
console.log(pLabels);