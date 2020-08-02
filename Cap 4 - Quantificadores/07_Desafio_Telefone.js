// \d - números [0-9]
// \D - não números [^0-9]
// \s - espaço [ \t\n\r\f]
// \S - não espaço [^ \t\n\r\f]
// \w - caracteres[a-zA-Z0-9_]
// \W - não caracteres[^a-zA-Z0-9_]

const texto = 
`Lista telefonica:
	- (11) 98756-1212
	- 98765-4321
	- (51) 98205-4673`

//const regex = /\d{5}-\d{4}/g
const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g
console.log(texto.match(regex))

//Resposta do professor
// \(?     -> Inicia com parentes se tiver.
// \d{1,2} -> {1,2} se existir entre os parenteses
// \)?     -> Finaliza os parenteses, se existir
// \s      -> sem espaços, se existir
// d{4,5}-\d{4} -> 4 a 5 digitos, hífen, 4 dígitos
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))
