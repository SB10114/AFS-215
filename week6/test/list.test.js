var expect = require("chai").expect
const SuppliesList = require("../lib/list")
let list


before( () => {
    console.log("This is the beginning")
})

beforeEach( () => {
    list = new SuppliesList()
    list.addToList("Machine")
    list.addToList("Leads")
    list.addToList("Metal")
    list.addToList("Wire")
    list.addToList("Electricity")
})

after( () => {
    console.log("No Supplies")
    list.emptyList()
})

it("find item", () => {
    expect(list.listContents("Wire")).to.equal(true)
})

it("remove from list", () => {
    list.removeFromList("Chalk pen")
    expect(list.getList()).to.deep.equal({"Slag hammer"})
})

it("add to list", () => {
    expect(list.getList()).to.deep.equal(["Slag hammer", "Wire brush", "Chalk pen"])
})



