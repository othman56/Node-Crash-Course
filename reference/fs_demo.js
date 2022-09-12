const fs = require("fs");
const path = require("path");

// To create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder Created...");
// });

//  To create and write to a file and append to a file

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world!",
//   {},
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file written to...");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " i love Node,js",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("file appended to the txt file");
//       }
//     );
//   }
// );

// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;

//     console.log(data);
//   }
// );

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
