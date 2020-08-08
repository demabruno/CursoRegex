const texto = `
    Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234  
`
// Primeiro: Criar grupo para pegar o DDD, com dois digitos, que é opcional \(\d{2}\)
//           \(\d{2}\)\s? -> O \s? do final significa que pode existir um espaço opcional entre o ) e 
// (\(\d{2}\)\s?)? -> O último ? quer dizer que
const regexDDD = /(\(\d{2}\)\s?)?/g
console.log(texto.match(regexDDD))

//Segundo : Criar um grupo para pegar 5 digitos, seguidos de - e mais 4 digitos
const regexTelefone = /(\(\d{2}\)\s?)?\d{4,5}\-\d{4}/g
console.log(texto.match(regexTelefone))