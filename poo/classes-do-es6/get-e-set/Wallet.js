class Wallet {
  #amount
  #username
  // Nessa classe, salvaremos o número como inteiro
  // (Só porque sim, pra exemplificar kasdkdas)
  constructor() {
    this.#amount = 100.99 * 100 // 10099
    this.#username = "Username"
  }

  get amount() {
    return this.#amount / 100
  }

  get username() {
    return this.#username
  }

  set username(newUsername) {
    if (typeof newUsername !== "string") {
      console.error("username must be a string.")
      return
    }
    this.#username = newUsername
  }
  // para usar get e set, a propriedade deve ser privada, caso contrário dá um
  // loop infinito: você chamaria a função eternamente.
  /*
  exemplo:
  set username(newUsername){
    // aqui embaixo seria uma referência ao setter username,
    // gerando um loop infinito
    this.username = newUsername
  }
  set username(newUsername){
    // aqui dá tudo certo pois os nomes são diferentes.
    this.#username = newUsername
  }
  */
}

const wallet = new Wallet()
// na hora de chamar o getter, você chama
// como um atributo, não uma função, mesmo que internamente seja uma função.
console.log(wallet.amount)
console.log(wallet.username)
// o setter não é chamado como uma função, e sim como uma atribuição
// normal de variável, mesmo que internamente seja uma função.
wallet.username = [1123123]
console.log(wallet.username)
