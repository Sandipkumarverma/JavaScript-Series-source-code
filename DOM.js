// document.getElementById("heading").style.backgroundColor="red"
// document.getElementById("para").style.color="blue"

// let styleDesc = document.getElementsByClassName("desc")
// for (let i = 0; i < styleDesc.length; i++) {
//     styleDesc[i].style.backgroundColor="yellow"
    
// }



// let element = document.getElementById("box")

// console.log(element)

// element.innerHTML="<p>dom ka a video aacha lage to comment me #domNEC jarur kare</p>"




const btn = document.getElementById("toggleBtn")
const body = document.body

btn.addEventListener("click", function(){
     let isDark = body.classList.toggle("dark-mode");

     if (isDark) {
        btn.textContent="Disable dark mode"
     } else {
        btn.textContent="Enable dark mode"
     }
})
