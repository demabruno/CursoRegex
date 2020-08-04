const texto = 'supermercado hipermercado minimercado mercado'

// Dá pra aninhar as palavras dentro de um grupo ()
console.log(texto.match(/(super|hiper|mini)?mercado/gi))
console.log(texto.match(/(((su|hi)per)|mini)?mercado/gi))