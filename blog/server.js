const http=require("http")
const fs= require("fs")
const server=http.createServer((req, res) =>{
    console.log(req.url, req.method)
    res.setHeader("content-type", 'text/html')
    fs.readFile("./views/index.html", (err, data) =>{
        if(err){
            console.log(err.message)
        }
        else{
            res.write(data)
            
        }
        res.end()
    })
})

server.listen(3000, 'localhost', () =>{
    console.log("listening on port of 3000")
})