// /* 
//  In JavaScript, an object is a collection of key-value pairs, where keys (also called properties) are strings, and values can be any data type (numbers, strings, arrays, other objects, functions, etc.).

// */ 


//   Using Object Literal (most common & recommended way):  
// Object Literal Syntax (Sabse Simple Tarika)

let JsStudent = {
  name : "sandip",
  gmail : "sandy@gmail.com",
  "full name" : "sandip verma",
  isStudent : true,
  skill : [ "JavaScript", "React JS", "Next JS"],
  age : 19,
  greet: function() {
    console.log(`Hello from ${this.name}`);
  }
} 
console.log(JsStudent);

console.log(JsStudent.name);
console.log(JsStudent.skill);
console.log(JsStudent["age"]);
console.log(JsStudent["skill"]);
console.log(JsStudent["full name"]);



// new object constructor 

let person = new Object()
person.name = "Rahul",
person.age  = 20,
person.gamil = "rahul@gamil.com"

console.log(person);


//           Using Constructor Function Before ES6

function student(name, age, gmail, city){
  this.name = name;
  this.age = age ;
  this.gamil = gmail;
  this.city = city;
}
let studentData = new student("rahul",22,"rahul@gmail.com","Ranchi")
console.log(studentData);


//         Using ES6 Class (Modern JavaScript)

class person1{
  constructor(name, age, city, gamil){
    this.name = name;
    this.age = age;
    this.city = city;
    this.gamil = gamil;
  }
}

let personData = new person1("sandip", 19, "Ranchi", "sandy@gamil.com")
console.log(personData);

let personData2 = new person1("shivam", 19, "Ranchi", "sandy@gamil.com")
console.log(personData2);



let JsStudentData = {
  name : "sandip",
  gmail : "sandy@gmail.com",
  "full name" : "sandip verma",
  isStudent : true,
  skill : [ "JavaScript", "React JS", "Next JS"],
  age : 19
} 

console.log(JsStudentData);
JsStudentData.city = "Ranchi";  // add properties

console.log(JsStudentData);

delete JsStudentData["full name"]
delete JsStudentData.isStudent       //  delete properties
console.log(JsStudentData);


JsStudentData.gmail = "sandip@gmail.com"   //   modifying properties
console.log(JsStudentData);

console.log(Object.keys(JsStudentData));   // get all keys

console.log(Object.values(JsStudentData));   // get all value 

console.log(Object.entries(JsStudentData));     // get all key and value pairs



let obj1 = {
  name : "Vipul",
  age : 18,
}

let obj2 ={
  city : "Ranchi",
  gmail : "vipul@gmail.com"
} 

// let merge = { obj1 , obj2 }
  
//let merge = Object.assign({}, obj1, obj2)
  
let merge = {...obj1,...obj2}
console.log(merge);


//                                Nested Objects
let studentObj  = {
  name : "Rahul",
  
  address :{
         city : "ranchi",
         pincode : 110001
  }
};

console.log(studentObj.address.pincode);

//                using for loop

for (let key in obj1) {
  console.log(key + ": " + obj1[key]);
}



