//Só aceita senhas com no mínimo 6 e no máximo 20 caracteres, com letras maiúsculas, 
//   minúsculas, números e caracteres especiais

// \d - números [0-9]
// \D - não números [^0-9]
// \s - espaço [ \t\n\r\f]
// \S - não espaço [^ \t\n\r\f]
// \w - caracteres[a-zA-Z0-9_]
// \W - não caracteres[^a-zA-Z0-9_]

const texto = `
	123456
	cod3r
	QUASE123!
	#OpA1
	#essaSenhaEGrande1234
	#OpA1?
	Foi123!
`

// ^              --> É o delimitador de início de linha
// $              --> É o delimitador de final  de linha
///(^.{6,20}$)/gm --> Filtra qualquer coisa que tenha de tamanho entre 6 e 20 caracteres
const regexTamanho        = /(^.{6,20}$)/gm
// ?=  --> Olha tudo o que está a frente (positive look ahead)
const regexLetrasENumeros = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm
console.log(texto.match(regexLetrasENumeros))

