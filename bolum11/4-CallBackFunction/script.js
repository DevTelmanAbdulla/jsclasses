const getTodos = (callback) =>{

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() =>{
        // console.log(request,request.readyState);
        if(request.readyState===4 && request.status === 200){
            // console.log(request.responseText);
            callback(undefined,request.responseText);
        }
        else if(request.readyState === 4)
        {
            // console.log('Uğursuz nəticə');
            callback('Uğursuz nəticə',undefined);
           
        }
    })
    request.open('GET','https://jsonplaceholder.typicode.com/todoss');
    request.send();

}

// console.log(1);
// console.log(2);
getTodos((err,data) => {
//    console.log(err,data);
if(err){
    console.log(err);
}
else{
    console.log(data);
}
});
// console.log(3);
// console.log(4);
