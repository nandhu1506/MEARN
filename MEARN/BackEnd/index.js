const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Message from server")
})

server.listen(3000,()=>{
    console.log("Server Started");
    
})