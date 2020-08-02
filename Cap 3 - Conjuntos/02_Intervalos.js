const texto = '1,2,3,4,5,6,a.b c!d?e[f'
// [] --> Usado para definir uma classe (ou conjunto) de caracteres

const regexIntervaloMin = /[a-z]/g
const regexIntervaloMai = /[A-Z]/g
const regexIntervaloIgn = /[a-d1-3]/gi
const regexIntervaloNum = /[2-5]/g

console.log(texto.match(regexIntervaloMin))
console.log(texto.match(regexIntervaloMai))
console.log(texto.match(regexIntervaloIgn))
console.log(texto.match(regexIntervaloNum))