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

}

module.exports = ShoppingCart