// g - global - ou seja, não para de procurar na primeira ocorrência quando encontra
// i - ignore case

const texto = "Carlos assinou o abaixo-assinado.";
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab|zz/i));
console.log(texto.match(/c|ab|zz/gi));
console.log(texto.match(/c|ab/ig));