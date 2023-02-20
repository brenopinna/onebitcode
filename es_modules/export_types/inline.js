export function inline() {
  console.log("Inline")
}

/*
  no caso do export default,
  como ele exporta algo sem o nome,
  podem ser importatas funções anônimas
  ou resultados de expressões, sem
  nomeação.
*/
export default function () {
  console.log("defaultInline")
}
// export default 2 + 2
