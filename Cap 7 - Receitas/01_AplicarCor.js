const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html')

//* Pega tudo que estiver entre as tags <code>
const regexTagCode = /<code>[\s\S]*<\/code>/gi
let codigo = texto.match(regexTagCode)[0]

//Pega o que estiver entre "" no código fonte.
// .  -> Coringa para uma posição
// .* -> Traz zero ou mais letras a partir do coringa
const regexStrings = /(\".*\")/gi
//console.log(codigo.match(regexStrings))
codigo = aplicarCor(codigo, regexStrings, 'ce9178')

// g  -> não para após encontrar a primeira ocorrência
// () -> entre () pq são grupos de palavras
// \b -> para usar as bordas em torno das palavras
const regexPalavrasReservadas = /\b(package|public|class|static|if|else)\b/g
codigo = aplicarCor(codigo, regexPalavrasReservadas, '1385e2')

const regexTiposJava = /\b(void|int|string|double)\b/gi
codigo = aplicarCor(codigo, regexTiposJava, '1385e2')

const regexUmaLinha = /\/\//g
codigo = aplicarCor(codigo, regexUmaLinha, '267703')

// \/\* e \*\/ -> Selecionam a abertura e fechamento do comentário que é /* */
// [\s\S]*     -> Seleciona tudo o que está entre os comentários
const regexComentMulLinhas = /(\/\*[\s\S]*\*\/)/gim
codigo = aplicarCor(codigo, regexComentMulLinhas, '267703')

//Substitui o miolo do códio do regex pelo codigo formatado
const textoConteudoFinal = texto.replace(regexTagCode, codigo)

//Escreve um novo html
files.write('codeHtmlFinal.html', textoConteudoFinal)