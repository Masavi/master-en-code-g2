const { expect } = require("chai")
const ShoppingCart = require('./shopping-cart')

describe('Shopping cart - Unit tests', () => {
  let shoppingCart
  let items
  let itemsObject

  beforeEach(() => {
    shoppingCart = new ShoppingCart('Krystel cart')
    items = [
      'Bag - 500',
      'Book - 200',
      'Pot - 15',
      'Bag - 500'
    ]
  
    itemsObject = [
      { name: 'Bag', price: 500 },
      { name: 'Book', price: 200 },
      { name: 'Pot', price: 15 },
      { name: 'Bag', price: 500 },
    ]
  })
  

  describe('#addItem', () => {
    it('should add items', () => {

      items.forEach(item => {
        shoppingCart.addItem(item)
      })

      expect(shoppingCart.items.length).to.equal(4)
      expect(shoppingCart.items).to.deep.equal(itemsObject)
    })
  })

  describe('#getTotal', () => {
    it('should return the total', () => {
      const expectedTotal = itemsObject.reduce((total, { price }) => (total += price), 0)

      items.forEach(item => shoppingCart.addItem(item))

      expect(shoppingCart.getTotal()).to.equal(expectedTotal)
    })
  })
})