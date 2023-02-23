const Property = require("./Property")

class Apartment extends Property {
  // para adicionar comportamentos extras no constructor, primeiro
  // deve-se chamar a função construtora da classe mãe
  // que é representada por super().
  constructor(number, area, price) {
    // super se refere à classe mãe, assim, posso usar para
    // referenciar seus métodos / atributos.

    // super.getPricePerSquareMeter => me retorna esse método da classe mãe (Property)
    super(area, price)
    this.number = number
  }

  getFloor() {
    return Number(this.number.toString().charAt(0))
  }
}

module.exports = Apartment
