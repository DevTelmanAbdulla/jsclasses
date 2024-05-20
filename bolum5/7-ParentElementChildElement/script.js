const section = document.querySelector('section');
console.log(section.children);

/* console.log(Array.from(section.children));: This line converts the section element's child nodes (HTML elements) 
into an array using Array.from(). Then, it logs the array of child elements to the console. 
This is primarily used for debugging purposes to check what elements are considered children of the <section> element.

Array.from(section.children).forEach(child => { ... } ): This line iterates over each child element in the array 
and performs the following actions on each child element:

child.classList.add('section-element');: This line adds a CSS class called 'section-element' to the current child element. 
This class can be used to apply specific styling to these elements using CSS. 
*/
console.log(Array.from(section.children));

Array.from(section.children).forEach(child=>{
    child.classList.add('section-element');
}
)

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);
