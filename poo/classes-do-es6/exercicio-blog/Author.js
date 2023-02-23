const Post = require("./Post.js")

class Author {
  constructor(name, username) {
    this.name = name
    this.username = username
    this.posts = []
  }

  createPost(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }

  changeUsername(newUsername) {
    this.username = newUsername
  }

  commentAtPost(post, content) {
    post.addComment(content, this)
  }
}

module.exports = Author
