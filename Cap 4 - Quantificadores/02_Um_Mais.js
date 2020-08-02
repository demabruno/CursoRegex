const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + : 1 ou mais (obrigatório)
const regex = /fogo+/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex));

//  O que significa a regex acima? 
//  O + ao lado da letra o /fogo+/ indica que DEVE conter na pesquisa 1 ou mais
//    instâncias do O na pesquisa. Isso faz com que a palavra fog, do texto2, Ñ seja retornada.

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/gi));
console.log(texto3.match(/[0-3]+/gi));


