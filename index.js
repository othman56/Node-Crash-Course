// we are going to create a server

// we firstly bring in our modules
const http = require('http')
const path = require('path')
const fs = require('fs')

// now we are going to store our server in a variable called server
const server = http.createServer((req,res) =>{
    console.log(req.url)
    if (req.url === '/'){
        res.end('<h1>Home</h1>')
    }
}) 

// our port number could change after deplyment so it would give us an error  
// so we are going to check the env before adding the port
const PORT = process.env.PORT || 5000
// we will be adding the .listen to the variable name
server.listen(PORT, () => console.log(`server running on port ${PORT}`))