const Address = require("./Address")
const Person = require("./Person")

const addressInfo = [71, "Rua dos Bobos", "Vigário Geral", "Rio Branco", "Acre"]

// const myAddress = new Address(...addressInfo)
const breno = new Person("Brenin", ...addressInfo)

console.log(breno.address.fullAddress())
