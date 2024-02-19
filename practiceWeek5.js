console.log("Hey, It's me, JS")
// console.error.print("Error herr")


let a=1
let name='Shiwani'
var cms="021-21-0071"

var numAsString='10';
var numAsNumber=parseInt(numAsString);

var color=['red', 'green', 'blue']
for (let i = 0; i < color.length; i++) {
    console.log(color[i])
  }
 
  color.push('green');
  console.log(color.length);
  color.pop();
  color.pop();
  console.log(color.length);
  console.log(color.shift());
  console.log(color.unshift('purple'));
  color.splice(2,0,"musturd");
console.log(color);
console.log(color.lastIndexOf('green'));
console.log(color.includes("green"));

/*let myObj={
    name:"shiwani",
    cmsid:"021-21-0071",
    address:{
        street: 17,
        city:"Australia",
    }
}

let myObj2={
  Adress: "Near Agha khn lab",  age: '23'
}
let newObj=Object.assign(myObj,myObj2);
console.log(newObj);
Object.seal(newObj);
newObj.job="developer";
console.log(newObj);*/

function greet(name){
  return 'Hello, '+name;
}

console.log(greet('Shiwani'));

const greet2 = name =>{
  return 'Hello, '+name;
}

console.log(greet2('Sawaira'));
let newArr=[];
var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleA(Arr, n){
for (let i = 0; i < Arr.length; i++) {
   newArr.push(Arr[i]*n);
   console.log(i);
}
return newArr;
}

console.log(doubleA(arr, 3));

let myarr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarr.forEach(doubleA);
const newArr2 = arr.map(Math.sqrt)
console.log(newArr2);

console.log(arr.filter(item=> item%2))

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars.filter(item=> item.includes('W')))



