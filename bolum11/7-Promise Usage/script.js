// sade dilde izahi
// let check = true;

// const promise = new Promise((resolve, reject)=>{
//     if(check){
//         resolve('Promise Uqurlu')
//     } else{
//         reject('Promise uqursuz!');
//     }
// })
// console.log(promise)


//async yapilari sync yapilara cevirmek ucun istifade edilir
//callback-lerin alternativi
// let check = false;
// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve('Promis-de her hansi bir problem yoxdur')
//         } else{
//             reject('Problem var')
//         }
//     })
// }
// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>console.log('her zaman calisir'))


//promisleri XMLHTPREQUEST ile istifade edek
//Promise all
function readActress(url){
 return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    try{
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState===4 && xhr.status===200){
             resolve(JSON.parse(xhr.responseText));
            }
         })
        }
    catch(error){
    reject(error);
    }
    xhr.open("GET",url);
    xhr.send();
 })
}
readActress('example/tomhighler.json')
.then((data)=> console.log(data))
.catch((err)=>console.log('xeta oldu',err))



// const getTodos = (resource) =>{
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange',() =>{
//             // console.log(request,request.readyState);
//             if(request.readyState===4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//                 // console.log(data);
//                 // callback(undefined,data);
//             }
//             else if(request.readyState === 4)
//             {    
//                 reject("Failed");
//                 // console.log('Uğursuz nəticə');
//                 // callback('Uğursuz nəticə',undefined);
               
//             }
//         })
//         request.open('GET',resource);
//         request.send(); 
//     })  
// };

// getTodos('example/emmyy.json')
// .then(data=>{
//     console.log(data);
// }) 
// .catch(err=>{
//     console.log(err);
// })












// const getIt = ()=>{
//    return new Promise((resolve, reject) =>{
//     resolve("Ugurlu Data");
//     // reject("Failed Data");
//    })
// }

// getIt().then(
// (data) =>{
//     console.log('Uqurlu',data)
// },
// (err) =>{
//     console.log("Failed",err);
// }
// );

// getIt()
// .then(
//     (data) =>{
//         console.log('Uqurlu',data)
//     }
//    )
//    .catch(err=>{
//     console.log("Failed",err);
//    });














