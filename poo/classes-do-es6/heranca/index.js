const Property = require("./Property")
const House = require("./House")
const Apartment = require("./Apartment")

// mesmo com a classe House vazia, ela recebe os mesmos parâmetros na instância
// e tem os mesmos atributos e métodos da classe Property, pq eu usei o extends.
const house = new House(100, 25)
const apartment = new Apartment(71, 200, 43)

console.log(house)
console.log(apartment)

// como Property é a classe mãe, house é considerada uma instância de Property
console.log(house instanceof Property) // true
console.log(apartment instanceof Property) // true
