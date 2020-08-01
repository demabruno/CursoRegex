const texto = 'a   b'

console.log(texto.match(/a\s\s\sb/)) // Expressao regular para achar um ou mais espaços em branco

// \s+ -> Encontra todos os espaços a mais necessários dentro dos caracteres a e b
console.log(texto.match(/a\s+b/g)) 