const path = require("node:path");

//  get Base file name
console.log(path.basename(__filename));

// get directory name
console.log(path.dirname(__filename));

// to get file extension
console.log(path.extname(__filename));

// create path obbject
console.log(path.parse(__filename).base);

// concatenate path
console.log(path.join(__dirname, "test", "hello.html"));
