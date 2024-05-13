const ul = document.querySelector('.main');

let students = ["Scarlett","Carlie","Tom","Megan"];

let html=``;

students.forEach(student =>{
 html+= `<li>${student}</li>`
}
)

//without arrow function
// function processStudent(student) {
//     html += `<li>${student}</li>`;
// }

// students.forEach(processStudent);

//---console----
// console.log(html);

ul.innerHTML = html