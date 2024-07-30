// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=>res.json())
// .then((data)=>console.log(data));

console.log('www');
//this function is more better then promisses
async function getToDo(){
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);

}

getToDo();
