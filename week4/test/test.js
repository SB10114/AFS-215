const expect = require('chai').expect

it('expect passing test', function(){
    expect(true).to.equal(false)
})


it('returns "yellow" when passed "sprint"', function() {
    expect(cellphone("Sprint")).to.equal("yellow")
})

function cellphone(arg){
    if (arg === "att"){
        return "blue"
    }
    if (arg === "sprint"){
        return "yellow"
    }
    if (arg === "verizon"){
        return "red"
    }
    else {
        return "not an option"
    }
}


it('returns "blue" when passed "att"', function(){
    expect(cellphone("att")).to.equal('blue')
})

it('returns "red" when passed "verizon"', function(){
    expect(cellphone("verizon")).to.equal('red')
})

it("returns error message when passed none of the above", function(){
    expect(cellphone("grasshopper")).to.equal("not an option")
})