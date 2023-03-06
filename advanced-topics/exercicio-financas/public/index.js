import { getAllTransactions, createTransaction } from "./api.js"
import { Transaction } from "../entities/Transaction.js"

getAllTransactions().then(transactions => {
  transactions.forEach(transactionData => {
    const transaction = new Transaction(transactionData, changeTotal)
    transaction.render()
    changeTotal(transactionData.value)
  })
})

document.getElementById("add-transaction").addEventListener("click", async () => {
  const name = prompt("Digite o novo nome:")
  if (name === null) return
  else if (name === "") {
    alert("O campo deve ser preenchido!")
    return
  }
  const value = prompt("Digite o novo valor:")
  if (value === null) return
  else if (value === "") {
    alert("O campo deve ser preenchido!")
    return
  }
  if (isNaN(value)) {
    alert("Somente números são aceitos!")
    return
  }

  new Transaction(await createTransaction(name, value), changeTotal).render()
  changeTotal(value)
})

function changeTotal(additionalValue) {
  const total = document.getElementById("total")
  total.innerText = (Number(total.innerText) + Number(additionalValue)).toFixed(2)
}
