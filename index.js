// we are going to create a server

// we firstly bring in our modules
const http = require('http')
const path = require('path')
const fs = require('fs')

// now we are going to create our server in a variable called server
const server = http.createServer((req,res) =>{
    // we want to render a html page so we would use the fs and path modules to get the file we want to show
    // if the routes is equal to '/'
     if (req.url === '/'){
     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if(err) throw err
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(content)
        })
    }
// simillarly if the routes is equal to '/about' we want to render the about page
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(content)
        })
    }

    // now for the content type, if we are going to fetch data from a rest api we would be serving json() data
    if (req.url === '/api/users') {
        const  users=[
            {name: 'john doe', age: 40},
            {name: 'brad steve', age: 30}
        ]
        res.writeHead(200, {'content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    }



})  


// our port number could change after deployment so it would give us an error  
// so we are going to check the environment before adding the port
const PORT = process.env.PORT || 5000
// we will be adding the .listen to the variable name
server.listen(PORT, () => console.log(`server running on port ${PORT}`))