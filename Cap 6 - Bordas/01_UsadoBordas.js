const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ --> Inicio de linha/string, quando estiver fora de conjunto
console.log(texto.match(/r$/gi))  // $ --> Fim de linha/string

console.log(texto.match(/^r.*r$/gi)) // problema do dotall