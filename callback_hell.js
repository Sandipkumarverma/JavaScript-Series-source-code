// Callback Hell - When multiple callbacks are nested inside each other, code becomes 
//                 hard to read & debug.
//                 This often occurs when callbacks depend on the results of previous 
//                 callbacks, leading to a pyramid of doom (pyramid structured)



//           Example

// Search the product
// Add to cart
// Enter address details
// Make payment
// Wait for delivery
// Receive the package



function task1(Callback){
    setTimeout(()=>{
        console.log("task 1 is completed");
        Callback()
    },2000)
    
}

function task2(Callback){
    setTimeout(()=>{
        console.log("task 2 is completed");
        Callback()
    },500)
   
    
}

function task3(Callback){
    setTimeout(()=>{
        console.log("task 3 is completed");
        Callback()
    },1000)
   
    
}

function task4(Callback){
    setTimeout(()=>{
        console.log("task 4 is completed");
        Callback()
    },1500)
   
}


task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All task are completed");
                
            })
        })
    })
})
