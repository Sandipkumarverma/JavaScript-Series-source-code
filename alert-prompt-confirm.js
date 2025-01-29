// let showalert = () => {
//     alert("Welcome to NextEra Coders")
// }

// let showprompt = prompt("Enter your name","sandip")
// document.write(showprompt)


// let showconfirm = ( ) => {
//     confirm("are you sure! you wnat to open the google page")
// }


let note = prompt("write something here","NextEra Coders")
let write = confirm("do you want to print the prompt in the document")
if(write){
    document.write(note)
}
else{
    alert("please allow to write the prompt in the document")
}