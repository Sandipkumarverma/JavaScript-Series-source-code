//     map method in JavaScript

let arr = [1,2,3,4,5,6,7,8,9]
let dblarr = arr.map((value, index) => {
    //console.log(value, index);
    
    return value*2
})
//console.log(dblarr);


let arr1 = [1,2,3,4,5,6,7,8,9]
let squarearr = arr.map((value, index) => {
    //console.log(value, index);
    
    return value*value
})
//console.log(squarearr);


//    Filter mehtod in JavaScript

let a = [1,2,3,4,5,6,7,8,9]
let even = a.filter((value)=> value%2==0)
//console.log(a);

//console.log(even);



let student = [
    {name:"sandip",marks:95},
    {name:"vipul",marks:90},
    {name:"utkarsh",marks:92},
    {name:"shivam",marks:99},
    {name:"mohan",marks:85},
    {name:"sohan",marks:87},
    {name:"ram",marks:75}
]
let toper = student.filter((person)=> person.marks >=85)
//console.log(toper);


// Reduce method in javaScript


let arr2 = [1,2,3,4,54,6,71,87,9]
let add = arr2.reduce((pre,cur ) =>pre+cur )
//console.log(add);


let students = [
    {name:"sandip",marks:95},
    {name:"vipul",marks:90},
    {name:"utkarsh",marks:92},
    {name:"shivam",marks:99},
    {name:"mohan",marks:85},
    {name:"sohan",marks:87},
    {name:"ram",marks:75}
]
let person = students.reduce((max,mark) => mark.marks > max.marks ?mark:max,students[0])
let person1 = students.reduce((min,mark) => mark.marks < min.marks ?mark:min,students[0])
console.log(person);
console.log(person1);
