const Address = require("./Address")

class Person {
  constructor(name, number, street, neighborhood, city, state) {
    this.name = name
    this.address = new Address(number, street, neighborhood, city, state)
  }
}

module.exports = Person
