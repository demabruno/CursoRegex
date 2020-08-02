const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))     // Pega tudo que não eh digito [^0-9]
console.log(texto.match(/[^0-9]/g)) // Expressão equivalente o \D

console.log(texto.match(/[^\d!\[\s,\?\.]/g)) //Não quer digitos, espaços, ponto, [ e ? 

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))