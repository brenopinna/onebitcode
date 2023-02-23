// Função Construtora
function Book(title, pages, genres, author) {
  // por usar o this, o js entende automaticamente que é uma função construtora.
  this.title = title
  this.pages = pages
  this.genres = genres
  this.author = author

  this.published = false
  this.inStock = 0
  this.addOnStock = amount => (this.inStock += amount)
}

const genres = ["adventure", "fantasy"]
const author = "JK Rowling"

const bookOne = new Book("Harry Potter", 382, genres, author)
const bookTwo = new Book("Harry Potter 2", 346, genres, author)

// na hora do consolog, ele mostra o nome da função construtora antes do objeto
// indicando qual o "tipo" dele, nesse caso, Book.

console.log(bookOne)
console.log(bookTwo)
