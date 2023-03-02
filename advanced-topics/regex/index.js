// função construtora, mas sem a classe para facilitar.
function PhoneNumber(phoneNumber) {
  // o código abaixo vai retirar espaços e letras do número de telefone.
  const fixedString = phoneNumber.replace(/[\sa-zA-Z]/g, "")
  // vai usar o lookbehind pra achar 2 ou 3 dígitos numéricos, precedidos por um +.
  /*
    retorna o índice 0, pois esse método retorna outras informações, sendo a primeira
    as correspondências encontradas.
  */
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  /*
    traduzindo,: usei um lookbehind e um lookahead para pegar os dígitos numéricos
    em quantidade indefinida entre parênteses.
  */
  // usei o lookahead e o lookbehind pois eles não retornam os parênteses, só os dígitos no interior.
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  /*
    usei um lookbehind para pegar todos
    os caracteres ( . = todos os caracteres ) depois do fechamento dos parênteses
  */
  // depois dei um replace em todas as ocorrências do tracinho para tirar ele.
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber("+ 5asdasd5 (asd22) 99asdsdsasd798d asd 2625"))
console.log(new PhoneNumber("+ 1 (2ads12) 997-22a d ads-222-98 2625"))
