const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// to get the serialized url
console.log(myUrl.href);

// To get host (root domain)
console.log(myUrl.host);

// To get hostname(does not get the port)
console.log(myUrl.hostname);

// To get pathname
console.log(myUrl.pathname);

// To get serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// to add param
myUrl.searchParams.append('abc',123)
console.log(myUrl.searchParams)

//  To loop through
myUrl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`))
