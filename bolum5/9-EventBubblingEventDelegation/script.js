const button = document.querySelector('button');

// button.addEventListener('click',()=>{
//   console.log('Clickedildi');
// }
// )
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

// liElements.forEach(element =>{
//    element.addEventListener('click',el=>{
//     console.log(el.target);
//     console.log('Clicked on li');
//     el.target.style.color='blue'; // original li color will turned to blue once you clicked on it
//    })
// }
// )

//how to remove all ul elements from HTML
// const ul = document.querySelector('ul');
// ul.remove(); ul block totally will be removed once ul.remove() get activated

//li elements will be removed (li elements that once added later will be removed) once click on any li element

ul.addEventListener('click', e =>{
    // console.log(e)
    console.log(e.target);
    // if(e.target.tagName==='LI')
    // {
    //     e.target.remove();
    // }
})

// li elements will be removed (li elements that once added later won't removed)  once click on any li element
liElements.forEach(element =>{
    element.addEventListener('click',el=>{
     el.target.remove();
    el.stopPropagation() //it works for only li doen't affect their parent(I mean ul)
    console.log(el.target);
    })
 }
 )


//le elements will be added once click on button
button.addEventListener('click',()=>{
   const li = document.createElement('li');
   li.textContent = 'Javascript';
//    ul.append(li); 
   ul.prepend(li); //add element to the top
  }
  )