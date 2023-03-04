function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18)
    } else {
      reject(new Error('param "age" is required.'))
    }
  })
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear()
      const currentYear = new Date().getFullYear()
      resolve(currentYear - birthYear)
    } else {
      reject(new Error('param "birthday" is required.'))
    }
  })
}

const date = "2003-08-10"

// dessa forma, as promises ficam muito aninhadas, torna o código mais ilegível,
// pois precisa usar um then e um catch para cada promise que aparecer
getAge(date)
  .then(age => {
    checkAge(age)
      .then(isOverEighteen => console.log(isOverEighteen))
      .catch(err => console.log(err.message))
  })
  .catch(err => console.log(err.message))

// usando outro then, pode-se pegar o retorno da promise e trabalhar com ele,
// tornando o código mais legível, além de ter um único catch.
getAge(date)
  .then(age => checkAge(age))
  // esse segundo then vai trabalhar com o retorno do primeiro then.
  .then(isOverEighteen => console.log(isOverEighteen))
  .catch(err => console.log(err.message))
