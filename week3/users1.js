let myFunction = require("./classInstances")

let access1 = new myFunction(9)
let access2 = new myFunction(14)
let access3 = new myFunction(21)
let access4 = new myFunction(8)
let access5 = new myFunction("B")


console.log(access1.greeting())
console.log(access2.greeting())
console.log(access3.greeting())
console.log(access4.greeting())
console.log(access5.greeting())