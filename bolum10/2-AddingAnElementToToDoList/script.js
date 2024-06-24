const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//form-dan almis deyeri generateTemplate()-e gondermis olduq
//trasferred value to generateTemplate() 
const generateTemplate = (todo) =>{
   const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>
   `;
   list.innerHTML+=html;
}

addForm.addEventListener('submit',e=>{
   e.preventDefault();
   const todo = addForm.add.value.trim();
//    console.log(todo);
   if(todo.length){
    generateTemplate(todo);
    addForm.reset();
   }
   
})

/* 

The code snippet addForm.addEventListener('submit', e => {...}) represents an event listener. 
This block defines the code that will execute when a specified HTML form is submitted.

Here's an explanation of the terms used:

addForm: This is likely a variable or selector representing an HTML form element. 
It refers to the form you want to watch for submission and attach an event listener to.

.addEventListener('submit', e => {...}): 
This method is used to listen for a specific type of event (here, "submit"). 
It allows you to specify the function to run when an event occurs. 
The function contains the code that should run when the event happens.

'submit': This specifies the type of event you want to listen for. 
The "submit" event occurs when a form is submitted.

e => {...}: 
This represents the function to run when the event occurs. 
e usually represents the event object, which contains details about the event.
*/