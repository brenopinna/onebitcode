const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  try {
    resetForm()
    validateName(inputs.name.value)
    inputs.name.classList.add("sucess")
    validateEmail(inputs.email.value)
    inputs.email.classList.add("sucess")
    validatePassword(inputs.password.value)
    inputs.password.classList.add("sucess")
  } catch (error) {
    inputs[error.input].classList.remove("sucess")
    inputs[error.input].classList.add("error")
    document.getElementById(`${error.input}-error`).innerText = error.message
  }
})

function validateName(name) {
  if (!name.trim().match(/[A-Za-z]+\s[A-Za-z]+/)) {
    const error = new Error("Insira seu nome completo!")
    error.input = "name"
    throw error
  }
}

function validateEmail(email) {
  if (!email.match(/^\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/)) {
    const error = new Error("O email inserido é inválido!")
    error.input = "email"
    throw error
  }
}

function validatePassword(password) {
  if (
    !(
      password.match(/[a-z]/) &&
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[^A-Za-z0-9]/) &&
      password.match(/.{8,}/)
    )
  ) {
    const error = new Error("A senha inserida não é forte o suficiente!")
    error.input = "password"
    throw error
  }
}

function resetForm() {
  for (let input in inputs) {
    inputs[input].classList.remove("sucess", "error")
    document.getElementById(`${input}-error`).innerText = ""
  }
}
