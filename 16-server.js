const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Request event");
    res.end("hello world");
})

server.listen(5000,()=>{
    console.log("Server listening at the port 5000");
})