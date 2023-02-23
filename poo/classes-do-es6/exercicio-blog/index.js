const Author = require("./Author")

const breno = new Author("Breno Pinna", "b011")
const randomPerson = new Author("Random", "23$!#$")

const jsPost = breno.createPost(
  "Javascript: POO",
  "Estou estudando atualmente a programação orientada a objetos com a linguagem javascript!"
)

breno.commentAtPost(jsPost, "Lembre de curtir e compartilhar com os amigos!")
randomPerson.commentAtPost(jsPost, "Parabéns, curti!")

console.log(breno)
console.log(jsPost.comments)
