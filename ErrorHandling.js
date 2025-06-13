// An error is a problem that occurs during the execution of a script. It disrupts the normal flow of the program and may cause it to crash if not handled properly.

let x = 10
console.log(x);
console.log(y);


// compile time error            syntax error 

console.log(1;


// run time error

console.log(x);                  //refference error





try{
console.log("First line of try block ");
console.log(x);
console.log(y);
console.log("Last line of try block ");


}
catch(e){

console.log("first initialize the value of y after that you can print",);
throw new Error("pahle y ko initialize karo");


}
finally {
  console.log("This will run no matter what.");
}





let password = "abcd";

try {
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long.");
  }
  console.log("Password accepted!");
} catch (err) {
  console.log("Validation Error:", err.message);
}finally{
    console.log("create your password");
    
}

