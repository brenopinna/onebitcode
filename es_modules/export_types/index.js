import thatsTheDefaultImport, { inline as i } from "./inline.js"
import defaultExport, { group, group2 } from "./non-inline.js"
/*
  [nomeOriginal] as [nomePersonalizado] => muda o nome da importação,
  mesmo que ja tenha um nome padrão.
*/
i()
/*
  O export default exporta sem um nome específico, então pode
  importar ele sem usar as chaves.
  Também só pode ter 1 desse por arquivo.
*/
thatsTheDefaultImport()

// exports non-inline, separados da declaração dos valores exportados.
defaultExport()
group()
group2()
