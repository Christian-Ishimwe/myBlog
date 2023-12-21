const fs= require("fs")

// reading files

// fs.readFile("./docs/texwt1.txt", (err, data) =>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// writting files

// fs.writeFile("./docs/text1.txt", "Hello Kesh", () =>{
//     console.log("File created!")
// })


// directories
//check if the file exists
// if(!fs.existsSync('./assets')){
//     fs.mkdir("./assets", () =>{
//         console.log("Directory created successul")
//     })
// }else{
//     fs.rmdir("./assets", (err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Directory deleted succesful!")
//     })
    
// }

// deleting files


if(fs.existsSync("./docs/text2.docs")){
    fs.unlink("./docs/text2.docs", (err) =>{
        if(err){
        console.log(err.message)}else{
        console.log("File dileted!")
        }
    })
}