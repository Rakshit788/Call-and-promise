let egstring = "hello world" ;
let manipulatestring = function(string , callback){
 let finaloutput =callback(string);
return finaloutput ;
}
let logString = function(str){
    let response = `The manipulated string is ${str.toUpperCase()}`
    return response ;
}
console.log(manipulatestring(egstring,logString));