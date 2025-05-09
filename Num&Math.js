//   ****************Number******************
let num = 255
let num1 = 255.123
console.log(num1);

let num2 = new Number(23)
console.log(num2);
 
console.log(num.toString());
console.log(num2.toString(2));
console.log(num2.toString(8));
console.log(num.toString(16));

console.log(num.toLocaleString());

console.log(num.toFixed(2));
console.log(num.toPrecision(5));

console.log(isFinite(100));
console.log(isFinite(Infinity));

//***************math*************** */

console.log(Math);

console.log(Math.abs(-9));

console.log(Math.round(6.3));
console.log(Math.round(4.9));

console.log(Math.ceil(6.9));
console.log(Math.floor(6.1));

console.log(Math.min(10,2,30,45,14));
console.log(Math.max(10,2,30,45,14));

console.log(Math.pow(3,2));
console.log(Math.sqrt(64));

console.log(Math.random());

console.log(Math.floor(Math.random()*10+1));


let min = parseInt(prompt("Enter Min Number"))
let max = parseInt(prompt("Enter Min Number")
)

let RandomNum = Math.floor(Math.random()*(max - min+1)) + min
console.log(RandomNum);

alert("Random Number between " + min + "and" + max + "= " +RandomNum)

