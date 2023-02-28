module.exports = class Installment {
  #value
  #number
  #paid
  constructor(value, number) {
    this.#value = Number(value.toFixed(2))
    this.#number = number
    this.#paid = false
  }

  get value() {
    return this.#value
  }

  get number() {
    return this.#number
  }

  get paid() {
    return this.#paid
  }

  pay() {
    if (this.#paid) {
      console.log("This installment is already paid!")
      return
    }
    this.#paid = true
  }
}
