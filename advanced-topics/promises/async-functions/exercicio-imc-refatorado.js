async function calculateImc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject('\nERRO: Os parâmetros devem ser do tipo "number"!\n')
  }
  return Number((weight / height ** 2).toFixed(2))
}

async function weightSituation(weight, height) {
  try {
    // coloca antes do await para ser exibido de forma assíncrona, pq se colocar depois, só vai ser
    // executado depois da promise ser resolvida.
    console.log("Log da função síncrona.")
    const imc = await calculateImc(weight, height)
    console.log(`\nIMC: ${imc} kg/m²`)
    let situation
    if (imc > 40) situation = "obesidade grave"
    else if (imc >= 30) situation = "obesidade"
    else if (imc >= 25) situation = "sobrepeso"
    else if (imc >= 18.5) situation = "normal"
    else if (imc < 18.5) situation = "magreza"
    console.log(`Situação: ${situation}`)
  } catch (error) {
    console.log(error)
  }
}

weightSituation(71, 1.74)
weightSituation(48, 1.6)
weightSituation(71, "texto")
weightSituation(82, 1.72)
weightSituation(120, 1.8)
