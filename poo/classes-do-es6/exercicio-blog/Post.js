const Comment = require("./Comment.js")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.author = author
    this.body = body
    this.comments = []
    this.createdAt = new Date()
  }

  addComment(content, author) {
    this.comments.push(new Comment(author.username, content))
  }
}

module.exports = Post
