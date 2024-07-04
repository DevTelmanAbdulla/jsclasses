const variable = 
[
    {hobby:'swimming',perwson:'Megan'},
    {hobby:'swimming',perwson:'Megan'},
    {hobby:'take a trip',perwson:'Megan'},
];

//array-mizi json string halina getirir
console.log(JSON.stringify(variable));

//set edilir localStorage.setItem('todos', JSON.stringify(variable)) ile JSON formatındaki arrayi 
//'todos' adıyla lokal depolamaya qeyd edir
localStorage.setItem('todos',JSON.stringify(variable))

//JSON string gelir
//localStorage.getItem('todos') ile 'todos' adıyla qeydedilmis datani alır. Bu data hele JSON formatında bir stringdir.
const storeData = localStorage.getItem('todos');


//array halina cevirirk
//JSON.parse(storeData) ile aldığımız JSON formatındaki stringi tekrar JavaScript listine cevirir.
console.log(JSON.parse(storeData));