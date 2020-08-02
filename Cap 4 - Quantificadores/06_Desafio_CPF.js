// \d - números [0-9]
// \D - não números [^0-9]
// \s - espaço [ \t\n\r\f]
// \S - não espaço [^ \t\n\r\f]
// \w - caracteres[a-zA-Z0-9_]
// \W - não caracteres[^a-zA-Z0-9_]


const texto = 
`CPF dos aprovados:
	- 600.567.900-12
	- 765.998.345-23
	- 041.114.799-44`

// \S        -> Não quero espaço [^ \t\n\r\f]
// [0-9\.\-] -> Filtro dígitos de 0 a 9, incluindo . e -
// {13}      -> 13 caracteres ao total
// {1,}      -> Um u mais caracteres ao total
const regex = /\S[0-9\.\-]{13}/gi
const regex2 = /\S[0-9\.\-]{1,}/gi

console.log(texto.match(regex))
console.log(texto.match(regex2))

//Forma aprestanda pelo professor: Mais inteligente:
// 3 dígitos, ponto, 3 dígitos, ponto ...
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))