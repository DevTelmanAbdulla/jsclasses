// const firstPvalue = document.querySelector('p');
// console.log(firstPvalue);

//let's get Megan word only by using inner 
// const firstPvalue = document.querySelector('p');
// console.log(firstPvalue.innerText);

//let's modify Megan that was gotten with inner like above to another name
// const firstPvalue = document.querySelector('p');
// console.log(firstPvalue.innerText);
// firstPvalue.innerText = 'Megan best American Actress';

//let's add content inside p (will be updated)
// const firstPvalue = document.querySelectorAll('p');// return nodelist
// firstPvalue.forEach( element => {
//   console.log(element.innerText)
//   element.innerText += ' new field';
// }
// )

// let's get elements include "content" inside
const content = document.querySelector(".content");
console.log(content.innerHTML);

// content.innerHTML = '<h2>Vue JS, React Js, Angular JS</h2>';//will modify <h2></h2> content to given string
content.innerHTML += '<h2>Vue JS, React Js, Angular JS</h2>';

const students = ['Megan','Morgan','Victoria'];
students.forEach(student =>{
 content.innerHTML += `<p>${student}</p>`;
}
)