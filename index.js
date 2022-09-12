const Person = require("./person");
const path = require("path");

const person1 = new Person("usman hassan", 30);

console.log(person1.greeting());

console.log(path.basename(__filename));
