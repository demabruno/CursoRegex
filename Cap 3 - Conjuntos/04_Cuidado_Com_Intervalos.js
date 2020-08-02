const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //não define um intevalo

//tem que respeitar a tabela unicode, ou seja, a ordem deve ser respeitada.
//console.log(texto.match(/[a-Z]/g)) //Inicia com A e termina com z [A-z]
//console.log(texto.match(/[4-1]/g)) //Inicia no 1 e termina no 4 [1-4]