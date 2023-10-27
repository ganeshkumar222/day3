// question1:
let obj1 = {name:"person",age:5}
let obj2 = {age:5,name:"person"}
var compare = JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(compare)

// question2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    //console.log(data)
    var result = JSON.parse(data)
    for(var i= 0; i<result.length ; i++){
        console.log(result[i].flags.png)
    }
}
// question3
var country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all",true)
country.send();
country.onload = function(){
    var details = country.response;
    //console.log(data)
    var output = JSON.parse(details)
    for(var i= 0; i<output.length ; i++){
        console.log(output[i].name.common,output[i].region,output[i].subregion,output[i].population)
    }
}