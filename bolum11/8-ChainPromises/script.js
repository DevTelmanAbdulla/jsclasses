const getTodos = (resource) =>{
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',() =>{
            // console.log(request,request.readyState);
            if(request.readyState===4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
                // console.log(data);
                // callback(undefined,data);
            }
            else if(request.readyState === 4)
            {    
                reject("Failed");
                // console.log('Uğursuz nəticə');
                // callback('Uğursuz nəticə',undefined);
               
            }
        })
        request.open('GET',resource);
        request.send(); 
    })  
};

getTodos('example/emmy.json')
.then((data)=>{
    console.log('promise 1',data);
    return getTodos('example/scarlett.json');
    
})
.then((data)=>{
    console.log('promise 2',data); 
    return getTodos('example/megan.json');
})
.then((data)=>{
    console.log('promise 3',data);
})
.catch((err)=>{
    console.log(err);
});