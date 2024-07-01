// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response => response.json())) //return et menasina gelir (resolve kimi dusun)
//   .then((json) => console.log(json));


fetch('example/emmy.json')
.then(response=>{
   return response.json() 
})
.then(data=>{
    console.log(data);
 })
 .catch(err=>{
    console.log(err);
 })


  