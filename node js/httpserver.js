const http = require('http');
const port = process.env.PORT ||3000;

const server = http.createServer((req, res) =>{
    console.log(req)
    res.statuscode =200;
    res.setHeader('Content-Type', 'text/html')
    res.write('evfvfvfveeeev')
    res.end()
})

server.listen(port, ()=>{
    console.log('server is listening on port  ${port}');
});