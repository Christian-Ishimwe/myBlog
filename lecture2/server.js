const http=require("http")
const server=http.createServer((req, res) =>{
    console.log(req.url, req.method)
    res.setHeader("content-type", 'text/html')
    res.write("<h1>Christian codes</h1>")
    res.write("<h1>Christian codes</h1>")
    res.end()
})

server.listen(3000, 'localhost', () =>{
    console.log("listening on port of 3000")
})