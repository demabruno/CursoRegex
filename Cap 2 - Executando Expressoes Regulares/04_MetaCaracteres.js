// - Metacaracteres
// . ? * + - ^ s |[ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g // Usa \ como escape, ou seja, quebra de linha. Dessa forma o . não fica sendo um literal

console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g

console.log(texto.split(regexSimbolos))
