function ShoppingCart (name) {
    this.name = name
    this.items = []
    this.total = 0
}

ShoppingCart.prototype.addItem = function (itemString) {
    itemString = itemString.split('-')
    const name = itemString[0].trim()
    const price = Number(itemString[1])

    this.items.push({
        name,
        price
    })

    this.total += price
}

ShoppingCart.prototype.getTotal = function () {
 return this.total
}

ShoppingCart.prototype.getItemById = function (index) {
    return this.items[index]
}

ShoppingCart.prototype.removeItemById = function(index) {
    const removedItems = this.getItemById(index)
    this.items.splice(index, 1)
    return removedItems
}
module.exports = ShoppingCart