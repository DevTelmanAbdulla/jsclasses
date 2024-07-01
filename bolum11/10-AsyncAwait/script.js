const getTodos = async () => {

let response = await fetch('example/emmyy.json');//await bildiyimiz promise chain-nin isini gorur 
 //fetchden promise donur meselen 0.5 saniye gozleyir promisi ordaki responsa asign edir 
if(response.status !==200)
{
    throw new Error("Doqru endpointe request atmadiniz!");
}

 const data = await response.json();// datada tuturuq
return data;


};  //async bir funksiya hemise geriye promise dondurur

getTodos()
    .then((response)=>{
    console.log(response); 
    })
    .catch((err)=>{
    console.log(err.message);
 });


// console.log(getTodos());


// fetch('example/emmy.json')
// .then(response=>{
//    return response.json() 
// })
// .then(data=>{
//     console.log(data);
//  })
