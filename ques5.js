function greet(name ){
   return new Promise((resolve, reject)=>{
    resolve(`Hello ${name}`)
   })
}
greet("Rakshit").then((response)=> {
  console.log(response)
})

