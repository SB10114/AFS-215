class myFunction {
    constructor(num){
    this.num = num
    }

    greeting(){
        
    if (this.num % 3 == 0) {
        return ("Good morning")
    }
    if (this.num % 7 == 0){
        return ("Good afternoon")
    }
    if (this.num % 3 == 0 && this.num % 7 == 0){
        return ("Good evening")
    }
    if (typeof this.num == "number" ){
        return `"${String(this.num)}"` 
    }
    return "This is not a number"
}
}
module.exports = myFunction