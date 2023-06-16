module.exports = class myClass{
    constructor(num){
        this.num = num
    }
    if (num % 3 == 0) {
        return ("Good morning")
    }
    if (num % 7 == 0){
        return ("Good afternoon")
    }
    if (num % 3 == 0 && num % 7 == 0){
        return ("Good evening")
    }
    if (num % 3 != 0 && num % 7 != 0){
        return `"${num}"` 
    }
    error ("Not a number!")
}



module.exports = myFunction