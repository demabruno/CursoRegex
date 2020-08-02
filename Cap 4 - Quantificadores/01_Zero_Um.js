const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? Zero ou um - (Opcional)
const regex = /fogo?/gi
//  O que significa a regex acima? Ela irá procurar por fogo. 
//  A ? ao lado da letra o /fogo?/ indica que pode conter na pesquisa ZERO ou mais
//    instâncias do O na pesquisa. Isso faz com que a palavra fog, do texto2, seja retornada.
 
console.log(texto1.match(regex));
console.log(texto2.match(regex));