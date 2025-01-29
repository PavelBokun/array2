// Методы массивов

let fruits = ['apple', 'orange', 'banana'];

fruits.push('qiwi')

console.log(fruits);

let fruits2=fruits.pop()
console.log(fruits2);


fruits.unshift("orange")
console.log(fruits);
let fruits3 = fruits.shift()
console.log(fruits3);

let fruits4 = ['apple', 'banana', 'orange'];
fruits4.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

fruits4.push('kiwi');
let fruits5 = fruits4
console.log(fruits5);

fruits5.forEach((index,f)=>{
    console.log(`${f}--${index}`)
})

console.log(fruits5)
let fruits6=fruits5.map((f=>f.toUpperCase()))
console.log(fruits6);

let fruits7=fruits6.map((f=>f.toLocaleUpperCase()))
console.log(fruits7);

let fruits8=fruits7.filter((f=>f.length<6))
console.log(fruits8.push('g'));
let fruits9=fruits8.sort((a,b)=>a.length-b.length)

console.log(fruits9);


let arr2=[1,2,3,4,5,6,7,8,9,10]

let 
