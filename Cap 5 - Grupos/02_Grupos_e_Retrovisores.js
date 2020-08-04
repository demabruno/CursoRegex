const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// <(\w+)> --> Captura todos os grupos que estão entre <>
console.log(texto1.match(/<(\w+)>/g))
// <(\w+)>.* --> Captura todos os elementos que satisfazem a condição inicial 
console.log(texto1.match(/<(\w+)>.*/g))
// <\/\1>    --> É a tag retrovisor, ou seja, é a tag que será responsável por "fechar" a abertura feita pelo grupo <(\w+)>
// /\1       --> Significa que será referenciado o que foi capturado no grupo 1 (Poderia haver mais grupos ali)
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
// (lenta)(mente)       --> Grupo 01 e Grupo 02 respectivamente.
// (lenta)(mente).*\2.* --> Captura tudo que está após o grupo 02 (mente)
// (lenta)(mente).*\2.*\1\./gi--> \1 captura o que está no grupo 01
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: é uma sintaxe que não captura informação

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
// $2 --> Substitui o grupo 1 (lenta) pelo grupo 2 (mente)
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) 

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))