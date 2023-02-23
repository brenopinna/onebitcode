const Account = require("./Account")

const breno = {
  email: "email@teste.com",
  password: "123456",
}

const brenoAccount = new Account(breno)

console.log(brenoAccount.getBalance(breno.email, breno.password))
