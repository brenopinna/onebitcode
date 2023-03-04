function calculateImc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject('ERRO: Os parâmetros devem ser do tipo "number"!')
    } else {
      resolve(Number((weight / height ** 2).toFixed(2)))
    }
  })
}

function weightSituation(weight, height) {
  calculateImc(weight, height)
    .then(imc => {
      console.log(`IMC: ${imc} kg/m²`)
      let situation
      if (imc > 40) situation = "obesidade grave"
      else if (imc >= 30) situation = "obesidade"
      else if (imc >= 25) situation = "sobrepeso"
      else if (imc >= 18.5) situation = "normal"
      else if (imc < 18.5) situation = "magreza"
      console.log(`Situação: ${situation}\n`)
    })
    .catch(error => {
      // vai ser o último log, mesmo que seja a terceira promise que cause erro
      console.log(error)
    })
  // aparece antes dos logs da promise.
  console.log("Log da função síncrona.")
}

weightSituation(71, 1.74)
weightSituation(48, 1.6)
weightSituation(71, "texto")
weightSituation(82, 1.72)
weightSituation(120, 1.8)
