const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall: O . não seleciona o \n

// o conjunto \s\S são complementares (:|), ou seja, englobam tudo que contém espaços e o que não contém espaços
console.log(texto.match(/^r[\s\S]*r$/gi))