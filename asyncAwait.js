// async -> An async function always returns a Promise.

// await -> It pauses execution until the Promise resolves.



async function hello(){
    console.log("hello");  
}



// Function that simulates a file download

function downloadFile(filename){
    return new Promise((resolve) => {
      console.log(`Downloading ${filename}....📂`);
      
      setTimeout(()=>{
        resolve(`${filename} download successfully! ✅`)
      },3000) // Simulating a 3-second delay
    })
}



// Using async and await
async function startDownload() {
    console.log("starting the download Processing...");
    
    let result = await downloadFile("Javascript.pdf"); // Wait for the file to download
    console.log(result);// Output after 3 seconds: "report.pdf downloaded successfully! ✅"
        
}
startDownload()





// Using async and await download multiple file in symultansuly

async function MultipleDownload(){
    console.log("Starting multiple downloads...");

    let file1 = await downloadFile("javascript.pdf")
    console.log(file1);

    let file2 = await downloadFile("image.png");
    console.log(file2);

    let file3 = await downloadFile("video.mp4");
    console.log(file3);
    
    
}

MultipleDownload()





// Parallel Downloads using promise.all method in async await


async function parallelDownloads() {
    console.log("Starting parallel downloads...");
    
    let parallel = await Promise.all([
        downloadFile("javascript.pdf"),
        downloadFile("image.png"),
        downloadFile("video.mp4"),
        
    ])

    parallel.forEach((data) => console.log(data)
    );
    
}

parallelDownloads()