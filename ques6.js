function datafetch (){
  let response =   fetch(' https://jsonplaceholder.typicode.com/todos/1 ') ;
  return response ;
}
datafetch().then((data)=>{
   return  data.json() ;
}).then((jsondata)=>{
 console.log(jsondata);
})