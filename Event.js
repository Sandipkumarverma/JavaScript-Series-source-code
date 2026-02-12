

const Btn = document.querySelector("#myBtn")
const divContainer = document.querySelector(".container")
const subContainer = document.querySelector(".subContainer")
const inputBox = document.querySelector("#inputName")


// Btn.onclick = (e) => {
//     console.log('myBtn was clicked!');
//     console.log(e);
//     console.log("type of event",e.type);
//     console.log("target of event", e.target);
//     console.log("clientX",e.clientX, "clientY",e.clientY);  
// }

// divContainer.onmouseover = (e) => {
//     console.log('you are inside the div container!');
//     console.log(e);
//      console.log("type of event",e.type);
//     console.log("target of event", e.target);
//     console.log("clientX",e.clientX, "clientY",e.clientY);  
    
   
// }

Btn.addEventListener("click",() => {
    console.log("Button was clicked!");
    
})

Btn.addEventListener("click",() => {
    console.log("Button was clicked! 2times");
    
})

const time3 = () => {
    console.log("Button was clicked! 3times");
    
}

Btn.addEventListener("click",() => {
    console.log("Button was clicked! 4times ");
    
})

Btn.addEventListener("click",() => {
    console.log("Button was clicked! 5times");
    
})

Btn.addEventListener("click", (time3))
Btn.removeEventListener("click", (time3))


inputBox.addEventListener("keypress", (e) =>{
    console.log(e.key,"Key was pressed!");
    
})


divContainer.addEventListener("click", () => {
      console.log("this is parent container");
      
},true)


subContainer.addEventListener("click", () => {
      console.log("this is child container");
      
})