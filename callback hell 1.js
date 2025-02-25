

// Search the product
// Add to cart
// Enter address details
// Make payment
// Wait for delivery
// Receive the package





// searchProduct(function() {
//     addToCart(function() {
//         enterAddress(function() {
//             makePayment(function() {
//                 waitForDelivery(function() {
//                     receivePackage(function() {
//                         console.log("Shopping completed!");
//                     });
//                 });
//             });
//         });
//     });
// });



function task1(callback){
    setTimeout(()=>{
        console.log("task 1 is completed");
        callback()
    },2000)
    
    
}
function task2(callback){
    setTimeout(()=>{
        console.log("task 2 is completed");
        callback()
    },1500)
    
}
function task3(callback){
    setTimeout(()=>{
        console.log("task 3 is completed");
        callback()
    },500)
    
}
function task4(callback){
    setTimeout(()=>{
        console.log("task 4 is completed");
        callback()
    },1000)
    
}


task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all task is completed");
                
            })
        })
    })
})



function searchProduct(callback){
   setTimeout(()=>{
    console.log("search product form ekart");
    callback()
   },2000)
    
}

function addToCart(callback){ 
    setTimeout(()=>{
        console.log("Add the product in addCart");
        callback()
       },500)
    
}

function makePayment(callback){
    setTimeout(()=>{
        console.log("Payment for buy the product");
        callback()
       },1000)
    
}

function waitForDelivery(callback){
    setTimeout(()=>{
        console.log("Wait for delivery the product");
        callback()
       },4000)
    
    
}

function receivePackage(callback){
    
    setTimeout(()=>{
        console.log("Recive the product form the Deliver boy");
        callback()
       },1500)
    
}

searchProduct(()=>{
    addToCart(()=>{
        makePayment(()=>{
            waitForDelivery(()=>{
                receivePackage(()=>{
                    console.log("this product is very nice");
                })
            })
        })
    })
})







