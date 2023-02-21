const dayjs = require("dayjs")
const customParseFormat = require("dayjs/plugin/customParseFormat")
dayjs.extend(customParseFormat)

function showBirthdayInfo(birthdayString) {
  const pattern = "DD/MM/YYYY"
  const birthday = dayjs(birthdayString, pattern)
  const today = dayjs().startOf("day")
  const age = today.diff(birthday, "years")
  const nextBirthday = birthday.add(age + 1, "years").startOf("day")
  const daysLeftToNextBirthday = nextBirthday.diff(today, "days")
  console.log(`Idade atual: ${age} anos(s).`)
  console.log(`Próximo aniversário: ${nextBirthday.format(pattern)}`)
  console.log(`Faltam ${daysLeftToNextBirthday} dia(s) para o próximo aniversário.`)
}

showBirthdayInfo("10/08/2006")
