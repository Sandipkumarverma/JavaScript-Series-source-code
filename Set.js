
// Conclusion

// Set ek unique collection hota hai.

// Duplicate values store nahi karta.

// Multiple data types store kar sakta hai.

// Array ko unique banane me helpful hai.

// WeakSet sirf objects store karta hai.


let set = new Set()
console.log(set);

set.add(55).add(45)
set.add("India");


let num = new Set([1, 2, 3, 4, 4, 5,"utkarsh"]);
console.log(num);

num.add(100);
num.add(200);         //  add new elements
num.delete(5)         //  delete the elts
console.log(num.has(6));          //   has  available or not
console.log(num.values());          // give the value of elts
console.log(num,num.size);        //  size of the set
num.clear()                 //   clear all elts
console.log(num);





let colors = new Set(["red","green","yellow","blue","green"])
console.log(colors);
colors.clear()                 //   clear all elts
console.log(colors);



let hello = new Set(["heeeeeeeeeelloooo"])
console.log(hello);


let nuj = new Set("heeellooo")
console.log(nuj);






let cities = new Set(["Delhi", "Mumbai", "Kolkata"]);

cities.forEach(city => {
    console.log(city);
});


for (let city of cities) {
    console.log(city);
}

let numArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numArray);
console.log([...uniqueNumbers]); 



        
let mynum = new Set([10, 20, 30, 40]);
let myArray = [mynum];

console.log(...myArray); // Output: [10, 20, 30, 40]


//WeakSet ek special type ka Set hota hai jo only objects store karta hai aur weak references maintain karta hai.

let ws = new WeakSet();
let obj1 = {name: "John"};
let obj2 = {name: "Doe"};

ws.add(obj1);
ws.add(obj2);
console.log(ws);

console.log(ws.has(obj1)); // Output: true
