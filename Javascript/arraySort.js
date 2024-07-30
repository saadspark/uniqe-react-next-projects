//sort((a,b)=>a-b this will sort in ascending order
//sort((a,b)=>b-a this will sort in descending order
//not create new array sort existing

const x = [3,1,4,5,2];
x;
console.log(x.sort((a,b)=>a-b));

//if not want to change original array slice mare copy  
const y = [1,3,4,5];
y;
console.log(y.slice().sort((a,b)=>b-a));