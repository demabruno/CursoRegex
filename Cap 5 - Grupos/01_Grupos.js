
//Grupos são definidos a partir de ()

const texto1 = 'O José Simão é muito engraçado... hehehehehehe'

const grupo01 = /(he)/g    // Pega um grupo de he
const grupo02 = /(he)+/g   // Pega um grupo de he com o quantificador +, exibindo uma ou mais ocorrências do he

console.log(texto1.match(grupo01))
console.log(texto1.match(grupo02))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

