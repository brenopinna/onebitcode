function sum(a, b) {
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers")
  }

  return firstNumber + secondNumber
}

try {
  // javascript, tenta executar esse bloco, se der ruim, passa pro bloco abaixo (catch ou finally)
  console.log(sum(1, 2)) // retorna 3
  console.log(sum(true, 1)) // true => 1
  console.log(sum(false, 1)) // false => 0
  console.log(sum(undefined, 1)) // Error
  console.log(sum(null, 1)) // null => 0
  console.log(sum("0", 1)) // "0" => 0
  console.log(sum("zero", 1)) // Error
} catch (error) {
  console.log("Deu erro!")
  console.log(error.message) // só a mensagem do erro
  // assim, podemos exibir a mensagem de erro sem interromper o fluxo do programa.
} finally {
  // executado sempre, tendo erro ou não.
  console.log("Cálculos finalizados.")
}

// sem o bloco trycatch, o código abaixo não é executado, pois o programa é interrompido devido ao erro lançado.
console.log("O bloco após o trycatch é executado normalmente.")
