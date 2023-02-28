const Operation = require("./Operation")

module.exports = class Transfer extends Operation {
  #receiver
  constructor(user, receiver, value) {
    super(user, value)
    this.#receiver = receiver
  }

  get receiver() {
    return this.#receiver
  }
}
