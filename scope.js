// global scope


let var1 = "NextEra"
const var2 = "Coders"
var var3 = "NextEra Coders"

function check(){
    console.log(var1);
    console.log(var2);
    console.log(var3);
  
}
check();




// function scope


function check_function(){
    let var1 = "NextEra"
    const var2 = "Coders"
    var var3 = "NextEra Coders" 
    console.log(var1);
    console.log(var2);
    
    
    
}
check_function();
console.log(var3);



// block scope

{
    let var1 = "NextEra"
    const var2 = "Coders"
    var var3 = "NextEra Coders" 
    
    console.log(var1);
     console.log(var3);
}
console.log(var2);

