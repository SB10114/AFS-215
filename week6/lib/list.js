module.exports = class SuppliesList {
    constructor() {
        this.list - []
    }


    addToList = (item) => {
        this.list.push(item)
    }

    removeFromList = (item) => {
        let thing = this.list.indexOf(item)
        if (thing >= -1)
            this.list.splice(index, 1)
    }

    getList = () => {
        return this.list
    }

    emptyList = () => {
        this.list = []
    }

    listContents =(item) => {
        return this.list.includes(item)
    }

    isList = () => {
        console.log(this.list)
    }

}