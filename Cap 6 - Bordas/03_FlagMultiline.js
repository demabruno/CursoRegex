const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/gim))
//^(\w).+\1$ --> Captura o caracter da primeira linha e usa o retrovisor (\1$) para dizer
//               que a letra do inicio da frase deve ser igual a letra do final da frase.
//           --> Veja que todas as frases começam e terminam com a mesma letra. 
console.log(texto.match(/^(\w).+\1$/gi))

// Sem o retrovisor no final, captura a frase que for sem a necessidade da última letra ser 
// igual a primeira
console.log(texto.match(/^(\w).+/gim))
// g --> global case
// i --> ignore case
// m --> multiline
console.log(texto.match(/^(\w).+\1$/gim))
//console.log(texto.match(//gi))