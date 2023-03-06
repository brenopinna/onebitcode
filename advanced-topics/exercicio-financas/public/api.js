async function getAllTransactions() {
  return await fetch("http://localhost:3000/transactions").then(res =>
    Promise.resolve(res.json())
  )
}

async function createTransaction(name, value) {
  if (!name || !value) {
    return Promise.reject("Both values shouldn't be nullish!")
  } else if (isNaN(parseInt(value))) {
    return Promise.reject('Value param must be of type "number"')
  }
  return await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      value,
    }),
  }).then(response => Promise.resolve(response.json()))
}

async function editTransaction(id, name, value) {
  return await fetch(`http://localhost:3000/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, value }),
  }).then(response => {
    const jsonResponse = response.json()
    if (jsonResponse === {}) {
      return Promise.reject(`The transaction with the id ${id} doesn't exist!`)
    }
    return Promise.resolve(jsonResponse)
  })
}

async function deleteTransaction(id) {
  return await fetch(`http://localhost:3000/transactions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  }).then(response => {
    if (response.status === 404) {
      return Promise.reject(`The transaction with the id ${id} doesn't exist!`)
    } else {
      return Promise.resolve(response.status)
    }
  })
}

export { getAllTransactions, createTransaction, editTransaction, deleteTransaction }
