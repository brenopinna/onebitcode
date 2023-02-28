const App = require("./entities/App")

// criar usuários
App.newUser("breno pinna", "breno@gmail.com")
App.newUser("breno pinna dois", "breno@hotmail.com")

// operações básicas
App.deposit("breno@gmail.com", 100)
App.transfer("breno@gmail.com", "breno@hotmail.com", 50)
App.loan("breno@hotmail.com", 10000, 12)

// teste no console
console.log(App.findUserByEmail("breno@gmail.com").account.balance)
console.log(App.findUserByEmail("breno@hotmail.com").account.balance)

// pagar parcelas
const userTwoInstallments =
  App.findUserByEmail("breno@hotmail.com").account.loans[0].installments

for (let i = 0; i < Math.floor(userTwoInstallments.length / 2); i++) {
  userTwoInstallments[i].pay()
}

userTwoInstallments.forEach(installment => {
  console.log(`Valor: ${installment.value}; Pago: ${installment.paid}`)
})

// mudar taxa
App.changeLoanRate(10)
App.loan("breno@hotmail.com", 10000, 12)
console.log(App.findUserByEmail("breno@hotmail.com").account.balance)

const anotherUserTwoInstallments =
  App.findUserByEmail("breno@hotmail.com").account.loans[1].installments

anotherUserTwoInstallments.forEach(installment => {
  console.table(installment.value)
})
