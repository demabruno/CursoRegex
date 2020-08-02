const texto = '.$+*?-'

// dentro dos [] os metacaracteres são considerados caracteres normais
console.log(texto.match(/[+.?*$]/g)) 
console.log(texto.match(/[+.?*$]./g)) // . fora dos [] é coringa
console.log(texto.match(/[$-?]/g))    // isso é um intervalo (range) pq usou o - dentro do []


console.log(texto.match(/[$\-?]/g)) // NÃO é um intervalo (range) pq usou o scape \
console.log(texto.match(/[-?]/g))   // N eh intervalo pq há apenas 2 caracteres dentro ds []

// pode precisar de escape dentro do conjunto: - [ ] ^