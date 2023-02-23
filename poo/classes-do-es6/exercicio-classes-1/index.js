const User = require("./User.js")
const Product = require("./Product.js")

console.log("\nObjeto User:")
const breno = new User("Breno Pinna", "teste@email.com", "123456")
console.log(breno)
breno.login("teste@email.com", "123456")

console.log("\nObjeto Product:")
const livro = new Product("Harry Potter", "um livro muito legal", 37.99)
console.log(livro)
livro.addToStock(3)
console.log(livro.inStock)
console.log(livro.calculateDiscount(10))
