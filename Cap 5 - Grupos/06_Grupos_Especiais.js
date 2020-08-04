const texto = 'João é calmo, mas no transito fica nervoso.'
console.log(texto.match(/[\wÀ-ú]+/gi))

//[\wÀ-ú]  --> Conjunto de palavras com acento

// Positive lookahead
//+(?=,) --> Seleciona das as palavras que tem uma vírugla na frente
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
//+(?=,) --> Seleciona das as palavras que tem um ponto na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
//+(?=,) --> Seleciona das as palavras que tem uma vírugla e o mas na frente
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


// Negative lookahead
// +\b(?!,)  --> Seleciona das as palavras que tem NÃO uma vírugla na frente
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
// +\b(?!,)  --> Seleciona das as palavras que tem NÃO uma vírugla na frente de forma melhorada, com o espaço \s
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))