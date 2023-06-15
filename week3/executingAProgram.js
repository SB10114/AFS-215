module.exports = class user{
    constructor(num1, num2, userName= "Sarah", userAge= 22){
        const num1= 2
        const num2= 5
        const sum= num1 + num2
        const subt= num1 - num2
        const mult= num1 * num2
        const div= num1 / num2
    } 
}

function greeting(userName= "Sarah", userAge= 22){
        this.userName = userName
        this.userAge = userAge
}

function numbers(){
    str(5, 3, 7)
}
console.log( "The sum of ${num1} and ${num2} is ${sum}");
console.log( "The difference of ${num1} and ${num2} is ${sum}");
console.log( "The product of ${num1} and ${num2} is ${sum}");
console.log( "The quotient of ${num1} and ${num2} is ${sum}");

console.log(greeting, "Hello, ${userName} who is ${userAge}, welcome!");

console.log(numbers)