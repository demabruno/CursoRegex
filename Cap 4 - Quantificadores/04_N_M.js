const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// \d - números [0-9]
// \D - não números [^0-9]
// \s - espaço [ \t\n\r\f]
// \S - não espaço [^ \t\n\r\f]
// \w - caracteres[a-zA-Z0-9_]
// \W - não caracteres[^a-zA-Z0-9_]

// Quantificadores são expressos entre {}


console.log(texto.match(/\d{1,2}/gi))  // {1,2} Mostrar até dois elementos. Veja q divide o 120 em 12 e 0
console.log(texto.match(/[0-9]{2}/gi)) // {2}   2 dígitos apenas
console.log(texto.match(/\d{1,}/gi))   // {1,} 1 dígitos ou mais. Equivale a usar +

console.log(texto.match(/\w{7}/gi))    // {7} mostra conjuto de 7 caracteres. Veja que ssó o \w nao pega a palavra "milhões". Isso pq a expressao por si só nao pega caractere unicode.
console.log(texto.match(/[\wõã]{7,}/gi)) // 7 ou mais caracteres õ ou ã

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))
