class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("LOGIN REALIZADO COM SUCESSO!")
    } else {
      console.log("USUÁRIO OU SENHA INCORRETOS!")
    }
  }
}

module.exports = User
