const texto = '1,2,3,4,5,6,a.b c!d?e[f'
// [] --> Usado para definir uma classe (ou conjunto) de caracteres

const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'

//Conjunto para achar a e ã
const regexComESemAcento = /n[aã]./g
console.log(texto2.match(regexComESemAcento))