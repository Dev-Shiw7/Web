//const h1=document.getElementById("h1");




let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [];
a.push(4);
a.unshift(0);
let lastElement = a.pop();
let firstElement = a.shift();
let first = a[0];
let second = a[1];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
a.forEach(element => {
    console.log(element);
});
let index = a.indexOf(2);
let notFound = a.indexOf(10);
let found = a.find(element => element > 1);
let foundIndex = a.findIndex(element => element > 1);
let greaterThanTwo = a.filter(element => element > 2);
let squares = a.map(element => element * element);
let sum = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
