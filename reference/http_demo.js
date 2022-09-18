// We are going to create a basic server using the http module
// we bring in the http module
const http = require('http')

// We are going to use hte .createServer method to create the server
http.createServer((req,res) => {
    res.write('hello world')
    res.end()
}).listen(5000, () => console.log('server running'))
//then we specify a port for the server using the .listen method
