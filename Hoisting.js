/*  Hoisting is a default behavior in JavaScript where variable and function  declarations are moved to the top.

    A variable and function can be used before it has been declared.

    NOTE :-  JavaScript moves only the declarations (not initializations) to the top of the scope.

  */


// console.log(a);
// var a = 10;


//console.log(b);
//let b = 10;
//const b =10;


Hello()

function Hello() {

    console.log(c);
    var c = 10;
    console.log(c);
    
    
    console.log("Hello Coders!");
    
}
