let fetchData = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Data fetch from database");
    reject()
    },2000)
})

fetchData.then(()=>console.log("Data Fetch Successfully!")
)
.catch(()=>console.error("Error occur")
)




function FetchData(){
    return new Promise((resolve, reject)=>{
         setTimeout(() => {
            let Datafetch = true ;
            if(Datafetch){
              resolve("data fetch successfully!")
            }else{
                reject("data fetch failure!")
            }
         }, 3000);
    })
}

FetchData().then((result)=>{console.log(result)
})
.catch((error)=>{console.error(error);
})





//       Promise.all  methods in promise
Promise.all([
    Promise.resolve("task 1 is completed!"),
    Promise.reject("task 2 is failure!"),
    Promise.resolve("task 3 is completed!"),
    Promise.reject("task 4 is failure!")
]).then((result)=>console.log(result)
)
.catch((error)=>console.error(error)
)





//    Promise.allSettled methods in promise
Promise.allSettled([
    Promise.resolve("task 1 is completed!"),
    Promise.reject("task 2 is failure!"),
    Promise.resolve("task 3 is completed!"),
    Promise.reject("task 4 is failure!")
]).then((result)=>console.log(result)
)
.catch((error)=>console.error(error)
)
