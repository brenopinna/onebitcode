class Account {
  // no caso das variáveis do constructor, precisa declarar elas aqui em cima.
  /*this.*/ #password
  /*this.*/ #balance = 0 // pode-se atribuir valores iniciais a elas aqui fora mesmo.
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  // os métodos/atributos iniciados em # não são acessíveis fora da classe, ou seja,
  // as instâncias dessa classe não podem acessar diretamente (ex: instace.#password, nao funciona)

  getBalance(email, password) {
    return this.#authenticate(email, password)
      ? this.#balance
      : "Email ou senha incorretos!"
  }

  // no caso dos métodos privados, basta por a #, sem declarar la em cima,
  // inclusive tentei declarar antes la em cima e deu erro, entao nao precisa.
  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

module.exports = Account
