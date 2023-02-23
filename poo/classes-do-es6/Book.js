class Book {
  constructor(title, pages, genres, author) {
    this.title = title
    this.pages = pages
    this.genres = genres
    this.author = author
    this.published = false
  }

  publish() {
    this.published = true
  }
}

const genres = ["adventure", "fantasy"]
const author = "JK Rowling"

const book = new Book("Harry Potter", 375, genres, author)
const anotherBook = new Book("Harry Potter 2", 463, genres, author)

console.log("\n")
console.log("Book 1 published: " + book.published)
console.log("Publishing....")
book.publish()
console.log("Book 1 published: " + book.published)

// retorna o boolean referente se:
// [instância] instanceof [classe]
// se [instância] for uma instância da [classe], retorna true.
console.log("\n")
console.log("book => Book = " + (book instanceof Book))
console.log("book => Array = " + (book instanceof Array))
console.log("[book, anotherBook] => Array = " + ([book, anotherBook] instanceof Array))
console.log("\n")
