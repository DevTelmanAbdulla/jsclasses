const content = document.querySelector('p');
console.log(content.classList);

content.classList.add('typeError');
content.classList.remove('error');

//Task:
//Add error class for those contain error word inside, success class for those contain success word inside

const pValue = document.querySelectorAll('p');
pValue.forEach(element => {
    if(element.textContent.includes('error')){
        element.classList.add('error');
    }

    if(element.textContent.includes('success')){
        element.classList.add('success');
    }
}
);