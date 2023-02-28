module.exports = class Operation {
  #user
  #value
  #createdAt
  constructor(user, value) {
    this.#user = user
    this.#value = Number(value.toFixed(2))
    this.#createdAt = new Date()
  }

  get user() {
    return this.#user
  }

  get value() {
    return this.#value
  }

  get createdAt() {
    return this.#createdAt
  }
}
