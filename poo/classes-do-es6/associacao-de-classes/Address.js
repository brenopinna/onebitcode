class Address {
  constructor(number, street, neighborhood, city, state) {
    this.number = number
    this.street = street
    this.neighborhood = neighborhood
    this.city = city
    this.state = state
  }

  fullAddress() {
    return `Rua ${this.street}, nº ${this.number}. ${this.neighborhood}, ${this.city}/${this.state}\n`
  }
}

module.exports = Address
