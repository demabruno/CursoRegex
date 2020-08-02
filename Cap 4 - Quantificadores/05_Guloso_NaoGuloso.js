const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//Quantificadores Gulosos: São os que imprimem o todo
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

//Quantificadores Não Gulosos (lazy...) : São os que imprimem por partes
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))