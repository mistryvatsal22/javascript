
const {console} = require('console');
const http = require('http');

const port = process.env.PORT ||3000;

const server = http.createServer((req, res) =>{
    console.log(req,url)
    res.statuscode =200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url =='/'){
    res.end('evfvfvfveeeev');

    }
    else if(req.url == '/about'){
        res.end('vveffwrf');
    }
 
})
server.listen(port, ()=>{
    console.log('server is listening on port');
});