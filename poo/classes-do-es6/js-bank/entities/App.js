const Loan = require("./Loan")
const User = require("./User")

module.exports = class App {
  static #users = []

  static changeLoanRate(rate) {
    Loan.interestRate = rate
  }

  static get users() {
    return this.#users
  }

  static findUserByEmail(email) {
    return App.#users.find(user => user.email === email)
  }

  static newUser(name, email) {
    if (!App.findUserByEmail(email)) {
      App.#users.push(new User(name, email))
    }
  }

  static deposit(email, value) {
    const user = App.findUserByEmail(email)
    if (!user) {
      console.log("User doesn't exist!!")
      return
    }
    user.account.deposit(value)
  }

  static transfer(userEmail, receiverEmail, value) {
    const user = App.findUserByEmail(userEmail)
    const receiver = App.findUserByEmail(receiverEmail)
    if (!(user && receiver)) {
      console.log("User doesn't exist!!")
      return
    }
    user.account.transfer(user, receiver, value)
    receiver.account.transfer(user, receiver, value)
  }

  static loan(email, value, installments) {
    const user = App.findUserByEmail(email)
    if (!user) {
      console.log("User doesn't exist!!")
      return
    }
    user.account.loan(value, installments)
  }
}
