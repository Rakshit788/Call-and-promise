 async function datafetch(){

let [respomnse1, response2] =await  Promise.all([
        fetch(  "https://jsonplaceholder.typicode.com/todos/1" ).then((response)=>{
            return response.json()
        }) ,
        fetch( "https://jsonplaceholder.typicode.com/posts/1" ).then((response)=>{
            return response.json()} )
    ]) 
     

   let obj = {
    todo: respomnse1 ,
    post : response2
   }
   return obj;
}

datafetch().then((data)=>{
    console.log(data);
})