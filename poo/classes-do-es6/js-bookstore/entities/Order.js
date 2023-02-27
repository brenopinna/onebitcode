module.exports = class Order {
  #total
  #items
  #user
  constructor(items, user) {
    items.forEach(({ product, amount }) => {
      if (amount > product.inStock)
        throw new Error(`Insufficient amount of the product ${product.name} in stock`)
    })
    this.#items = items
    this.#user = user
    this.#total = items.reduce(
      (total, { product, quantity }) => total + product.price * quantity,
      0
    )
  }

  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total,
    }
  }
}
