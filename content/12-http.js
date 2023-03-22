const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
   res.end('WELCOME TO HOME PAGE');
    }
    if(req.url==='/about'){
    res.end('THIS IS OUR ABOUT PAGE');
    }
   res.end(`
    <h1>OOPS!</h1>
    <p>This is an invalid page you are looking for</p>
    <a href="/">GO BACK TO HOME PAGE</a>`
   );
})
