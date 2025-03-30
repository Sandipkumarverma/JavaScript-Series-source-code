/* 
  ✅A function inside another function forms a closure.

  ✅It allows the inner function to access the outer function’s variables even after the outer function has executed. 

*/



function outerfunction(){

  let outerVariable = console.log("Hii! i am from outerfunction");        // Outer variable

  function innerfunction(){
    console.log(outerVariable);            // Inner function remembers outerVariable
    
  }
  return innerfunction;
}
let closureVariable = outerfunction()
closureVariable()             // Output: Hii! I am from outer function    



function OuterFun(){
  let count = 0;            // Private variable

  return function(){
    count++;               // Increments count
    console.log(count);
    
  }
}

let closureCount = OuterFun()
closureCount()            // Output: 1
closureCount()            // Output: 2
closureCount()            // Output: 3
closureCount()            // Output: 4






function outer(){
  let name = "NextEra Coders";   // Outer variable

  function inner(){
    console.log(name);           // Inner function remembers 'name'
    
  }
  return inner;
}
let closure = outer()
closure()           // Output: NextEra Coders
closure()           // Output: NextEra Coders
closure()           // Output: NextEra Coders
closure()           // Output: NextEra Coders