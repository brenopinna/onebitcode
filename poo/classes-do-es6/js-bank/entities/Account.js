const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
  #balance = 0
  #deposits = []
  #transfers = []
  #loans = []
  #owner
  constructor(owner) {
    this.#owner = owner
  }

  get balance() {
    return this.#balance
  }

  get deposits() {
    return this.#deposits
  }

  get transfers() {
    return this.#transfers
  }

  get loans() {
    return this.#loans
  }

  get owner() {
    return this.#owner
  }

  deposit(value) {
    this.#balance += value
    this.#deposits.push(new Deposit(this.#owner, value))
  }

  transfer(emitter, receiver, value) {
    if (this.#owner === receiver) {
      this.#balance += value
    } else if (this.#owner === emitter) {
      this.#balance -= value
    }
    this.#transfers.push(new Transfer(emitter, receiver, value))
  }

  loan(value, installments) {
    this.#balance += value
    this.#loans.push(new Loan(this.#owner, value, installments))
  }
}
