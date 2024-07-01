const getTodos = (resource,callback) =>{

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() =>{
        // console.log(request,request.readyState);
        if(request.readyState===4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            // console.log(data);
            callback(undefined,data);
        }
        else if(request.readyState === 4)
        {
            // console.log('Uğursuz nəticə');
            callback('Uğursuz nəticə',undefined);
           
        }
    })
    request.open('GET',resource);
    request.send();

};

getTodos('example/emmy.json',(err,data) => {
   console.log(data);
   getTodos('example/megan.json',(err,data) => {
    console.log(data);
 });
    getTodos('example/scarlett.json',(err,data) => {
      console.log(data);
 
 });
    
});

