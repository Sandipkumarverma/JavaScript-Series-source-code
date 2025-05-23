let date = new Date()
console.log(date);
console.log(typeof date);

console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toDateString());
console.log(date.toTimeString());

let myDate = new Date(2025, 4, 22, 2, 50)
console.log(myDate);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let createMyDate = new Date("2025-5-22")
console.log(createMyDate);
console.log(createMyDate.toLocaleString());

let dateNow = Date.now()
console.log(dateNow);

console.log(createMyDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(`year - ${newDate.getFullYear()}`);
console.log(`month - ${newDate.getMonth() }`);
console.log(`date - ${newDate.getDate()}`);
console.log(`day - ${newDate.getDay()}`);
console.log(`Hours - ${newDate.getHours()}`);
console.log(`Minutes - ${newDate.getMinutes()}`);
console.log(`Seconds - ${newDate.getSeconds()}`);
console.log(`Milliseconds - ${newDate.getMilliseconds()}`);
console.log(`Time - ${newDate.getTime()}`);


let myNewDate = new Date()
console.log(myNewDate);
myNewDate.setFullYear(2030)
myNewDate.setMonth(9)
myNewDate.setDate(10)
myNewDate.setHours(17)
console.log(myNewDate);

setInterval(() => {
    let now = new Date()
    console.log(now.toLocaleTimeString());
    
    
},1000)


















