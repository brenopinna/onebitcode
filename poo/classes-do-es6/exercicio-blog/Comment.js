class Comment {
  constructor(username, content) {
    this.content = content
    this.username = username
    this.createdAt = new Date()
  }
}

module.exports = Comment
