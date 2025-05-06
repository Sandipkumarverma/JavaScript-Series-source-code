/* JSON (JavaScript Object Notation) is used to store and exchange data. It is easy to read and write, and is based on key-value pairs.

 ✅ JSON keys and string values are always in double quotes.
 ✅ It is commonly used for APIs and data transfer between client and server.

 {
  "name": "Sandip",
  "age": 24,
  "isStudent": true,
  "skills": ["JavaScript", "C++", "Python"]
}

*/

let Student = {
    Name : "sandip",
    Age : 19,
    Skills : ["c","JavaScript","React Js"],
    Course : "javaScript",
    Fee : "Free"
} 
//console.log(Student);

let StudentData = JSON.stringify(Student)
console.log(StudentData);


let Student1 = `{
    "Name" : "sandip",
    "Age ": 19,
   " Skills" : ["c","JavaScript","React Js"],
    "Course" : "javaScript",
   " Fee" : "Free"
} `

console.log(Student1);

let StudentData1 = JSON.parse(Student1)
console.log(StudentData1);
