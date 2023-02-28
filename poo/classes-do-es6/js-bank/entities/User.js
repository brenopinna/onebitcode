const Account = require("./Account")

module.exports = class User {
  #name
  #email
  #account
  constructor(name, email) {
    this.#name = name
    this.#email = email
    this.#account = new Account(this)
  }

  get name() {
    return this.#name
  }

  get email() {
    return this.#email
  }

  get account() {
    return this.#account
  }
}
