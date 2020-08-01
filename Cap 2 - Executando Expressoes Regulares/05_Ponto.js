// . -> é um coringa válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))   // O . representa um caracter qualquer entre o que se deseja encontrar
console.log(texto.match(/1..2/g))  // Não retorna nada porque não tem dois coringas entre 1 e 2
console.log(texto.match(/1..,/g))  // Encontrou 1 - coringa - coringa e a ,

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
// Procura qualquer coisa entre um ponto.
// .\.. é como se forsse um *.* -> O caracter \. procura um ponto de verdade
console.log(notas.match(/.\../g))  