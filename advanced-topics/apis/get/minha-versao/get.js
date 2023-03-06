async function fetchCountries() {
  return await fetch("https://restcountries.com/v3.1/all").then(res => res.json())
}

function getCountryInfo(country) {
  return {
    name: country.name.common,
    flag_src: country.flags.svg,
    flag_alt: country.flags.alt ?? `${this.name}'s flag`,
  }
}

function showCountry(country) {
  const { name, flag_src, flag_alt } = getCountryInfo(country)

  const container = document.createElement("div")
  container.classList.add("country")

  const title = document.createElement("h2")
  title.classList.add("name")
  title.innerText = name

  const flag = document.createElement("img")
  flag.classList.add("flag")
  flag.src = flag_src
  flag.alt = flag_alt

  container.append(title, flag)
  document.getElementById("countries").appendChild(container)
}

fetchCountries().then(countries => {
  countries.forEach(country => showCountry(country))
})
