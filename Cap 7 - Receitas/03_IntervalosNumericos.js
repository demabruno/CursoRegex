const texto = '0 1 10 192 199 201 249 255 256 259 312 1010 1512'

//Pegar numeros entre 0 e 255. Tem que capturar por partes
// \d{1,2}  --> Pega digitos entre 0-99
//  1\d{2}  --> Pega digitos que iniciam com 100 e vão até 199
//  2[0-4]  --> Seleciona números entre 200 e 249
//  25[0-5] --> Seleciona números entre 250 e 255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
