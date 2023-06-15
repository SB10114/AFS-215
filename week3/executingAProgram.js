module.exports = class user{
    constructor(num1, num2, userName= "Sarah", userAge= 22){
         this.num1= num1
         this.num2= num2
         this.userName = userName
         this.userAge = userAge
    } 
    sum(){
        return this.num1 + this.num2
    }
    subtract(){
        return this.num1 - this.num2
    }
    mult(){
        return this.num1 * this.num2
    }
    divide(){
        return this.num1 / this.num2
    }
    greeting(){
        return this.userName + this.userAge
    }
    numbers(){
        return this.num1.toString() + this.num2.toString()
    }
}

