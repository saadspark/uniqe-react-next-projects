//it go line by line first execute api then set (then)->that set a call back function 
//on geting data and print log=www then go back to get data from api

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then((data)=>console.log(data));

console.log('www');