let user = {
    firstname:' Rakshit ', 
    lastname : 'Chopra' ,
    age : 18 
}
 function ageinDays(person ,  logresult){
    let fullNmae =  `${person.firstname} ${person.lastname}` ;
    let ageInDays = person.age*365 ;

 logresult(fullNmae,ageInDays)  ;
 } 

 function  printingfunction (name , day) {
    return console.log(`The person Full Name is ${name} and their age in days is ${day}`);
 }

 ageinDays(user ,  printingfunction)