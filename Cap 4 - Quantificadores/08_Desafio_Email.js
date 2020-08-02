// \d - números [0-9]
// \D - não números [^0-9]
// \s - espaço [ \t\n\r\f]
// \S - não espaço [^ \t\n\r\f]
// \w - caracteres[a-zA-Z0-9_]
// \W - não caracteres[^a-zA-Z0-9_]

const texto = 
`Os e-mails dos convidados são:
	- fulado@cod3r.com.br
	- xico@gmail.com
	- xico.o.o.o.o.o.o@gmail.com
	- bruno_demartini@arg.inf.br
	- bruno_____de.mar.tin@ufsc.inf.br
	- bruno.d@cnx.com.br`

// Lógica: \w.*            -> Pega todos os caracteres do intervalo [a-zA-Z0-9_] mais o . 
//         @\w*\.\w*\.?\w* -> Pega o que está após o @
//         \.?\\w*         -> Pega, de forma opcional, se existir, alguma cois depois do .com
const regex  = /\w.*@\w*\.\w*\.?\w*/g

console.log(texto.match(regex))

//Soluções do professor:
// [a-zA-Z0-9_] = \w
// Usa o quantificador +, que é UMA ou MAIS ocorrências
// {2,4} -> O que é?
console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
// [\w.]+   -> Caracteres [a-zA-Z0-9_] mais o . (pega nomes como bruno_d, bruno.d antes do @)
// Após o @ -> @\w+\.\w{2,4}\.?\w{0,2} -> 
//			-> UM ou MAIS caracteres após a @, ponto, \w{de 2 a 4 caracteres}, 
//             ponto (\.?) de forma opcional, se existir, e \w{0,2} para pegar os úlitmos
//             dois dígitos de um e-mail, como um .br, por exemplo.
//		
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
