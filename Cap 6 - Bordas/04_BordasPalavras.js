
const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// \b --> Representa uma borda. Uma borda eh representada por um espaço, um acento, um hífen

// \bdia--> Pega todas as palavras que começam com dia, ou seja, que antes do dia tenham uma borda.
console.log(texto1.match(/\bdia\w+/gi))
// Seleciona palavras que terminam com dia
console.log(texto1.match(/\w+dia\b/gi))
// Seleciona palavras que tenham a palavra dia no meio
console.log(texto1.match(/\w+dia\w+/gi))
// Seleciona palavra dia que possui duas bordas entre ela
console.log(texto1.match(/\bdia\b/gi))

// borda É NÃO \w, que é [^A-Za-z0-9_]... temos problemas com acentos!
// Logo,\b é igual a [^A-Za-z0-9_]
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

// Vai trazer todas as palavras dia com bordas no entorno. Aqui considerou bordas como sendo
//     palavras acentuadas (média, wikipédia) e o hífen (bom-dia)   
console.log(texto2.match(/\bdia\b/gi))
// (\S*)    --> Remove tab's, espaços..
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!
// [\wÀ-ú-] --> Conjunto de palavras acentuadas
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))