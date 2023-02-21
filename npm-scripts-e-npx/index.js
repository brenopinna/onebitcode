// npx é um comando utilizado para executar os pacotes que instalarmos, pela linha de comando.
// nem todos os pacotes são executáveis: por exemplo, o dayjs não é executável na linha de comando.

// npx hello-world-npm => "Hello World NPM" no terminal.

// para colocar um script pronto no node, va em package.json > scripts e sete
// uma chave, eu escolhi "hello", e o comando dado "npx hello-world-npm", assim,
// ao digitar npm run hello no terminal, ele executa o comando que passei como valor.

// la nos scripts, posso omitir o "npx", pois o node subentede que é pra executar aquele comando.

const helloWorldNpm = require("hello-world-npm")

console.log(`Executando pelo index.js: ${helloWorldNpm()}`)

// na hora de colocar esse comando, usei a chave especial "start". por isso,
// nao preciso colocar run, só um npm start já roda.
