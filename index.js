// we are going to create a server

// we firstly bring in our modules
const http = require('http')
const path = require('path')
const fs = require('fs')

// now we are going to create our server in a variable called server
const server = http.createServer((req,res) =>{
//     // we want to render a html page so we would use the fs and path modules to get the file we want to show
//     // if the routes is equal to '/'
//      if (req.url === '/'){
//      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//         if(err) throw err
//             res.writeHead(200, {'content-Type': 'text/html'})
//             res.end(content)
//         })
//     }
// // simillarly if the routes is equal to '/about' we want to render the about page
//     if(req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if (err) throw err
//             res.writeHead(200, {'content-Type': 'text/html'})
//             res.end(content)
//         })
//     }

//     // now for the content type, if we are going to fetch data from a rest api we would be serving json() data
//     if (req.url === '/api/users') {
//         const  users=[
//             {name: 'john doe', age: 40},
//             {name: 'brad steve', age: 30}
//         ]
//         res.writeHead(200, {'content-Type': 'application/json'})
//         res.end(JSON.stringify(users))
//     }

// we are now going to rewrite our code in a more efficient and dynamic way
// we are firstly going to build our path to go to different routes based on the url
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// get extension of the file
let extname = path.extname(filePath);

// we now want to set a content type initially and depending on the extension of file been loaded using a swicth and case statement
// initial content type
let contentType = 'text/html'

// check extension
switch(extname) {
    case '.js':
        contentType = 'text/javascipt'
    break;
    case '.css':
        contentType = 'text/css'
    break;
    case '.json':
        contentType = 'applicatio/json'
    break;
    case '.png':
        contentType = 'image/png'
    break;
    case '.jpg':
        contentType = 'image/jpg'
    break;
}

// Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
// we now want to handle specific error codes i.e 404
    if(err.code == 'ENOENT') {
         fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
             res.writeHead(200, {'content-Type': contentType})
             res.end(content, 'utf-8');


            })
          } else{
            // another server error code maybe 500
            res.writeHead(500)
            res.end(`Server Error: ${err.code}`)
          }
    } else {
        // if there is no error meaning we get a success
            res.writeHead(200, {'content-Type': contentType})
            res.end(content, 'utf-8');


    }
    })
})  


// our port number could change after deployment so it would give us an error  
// so we are going to check the environment before adding the port
const PORT = process.env.PORT || 5000
// we will be adding the .listen to the variable name
server.listen(PORT, () => console.log(`server running on port ${PORT}`))