const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','http://www.acampschool.space');
link.textContent = 'Acamp';

//getting value of class attribute
const pValue=document.querySelector('p');
console.log(pValue.getAttribute('class'));

//updated value of class attribute
pValue.setAttribute('class','newcontent');
pValue.setAttribute('style','color:blue');