class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(amount) {
    this.inStock += amount
  }

  calculateDiscount(percentage) {
    return this.price * (1 - percentage / 100)
  }
}

module.exports = Product
