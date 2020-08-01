const texto1 = 'Bom\ndia'
const texto2 = 'Bom\tdia'

console.log(texto1.match(/.../g)) // O ponto nao encontra o \n -> espaço
console.log(texto2.match(/.../g)) // O ponto encontra o     \t -> tab

//Dot all -> Algumas linguagens tem a exp /s, mas o JS não.