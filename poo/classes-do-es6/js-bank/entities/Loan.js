const Installment = require("./Installment")
const Operation = require("./Operation")

module.exports = class Loan extends Operation {
  static #interestRate = 1.05
  #installments
  constructor(user, value, installments) {
    super(user, value)
    this.#installments = []
    for (let i = 1; i <= installments; i++) {
      this.#installments.push(
        new Installment((value * Loan.#interestRate) / installments, i)
      )
    }
  }

  static get interestRate() {
    return Loan.#interestRate
  }

  static set interestRate(newRatePercentage) {
    Loan.#interestRate = 1 + newRatePercentage / 100
  }

  get installments() {
    return this.#installments
  }
}
