var pariDispariUtente = prompt('Scommetti se il numero sarà pari o dispari');
console.log('hai scelto: ' + pariDispariUtente);
var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
var pariDispariUtenteLowerCase = pariDispariUtente.toLowerCase(); // disattivo il case sensitive


while ((isNaN(numeroUtente)) || (numeroUtente > 5) || (numeroUtente < 1)) {
    var numeroUtente = parseInt(prompt('Devi scegli un numero da 1 a 5'));
}
console.log('hai scelto il numero: ' + numeroUtente); // visualizzo il numero inserito dall utente

var numero = generaRandomMinMax(1, 5); // alla variabile numero sto assegnano il risultato della funziona generaRandomMinMax
console.log('il numero random è: ' + numero); // visualizzo il numero random dalla funzione

function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}

var somma = numeroUtente + numero;
console.log('la somma è: ' + somma);

var pariDispari = isPari(somma);

if (pariDispari == true) {
    console.log('il numero della somma è pari');
} else {
    console.log('il numero della somma è dispari');
}

function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if ((pariDispariUtente == 'pari') && (pariDispari == true)){
    console.log('Hai vinto');
} else if ((pariDispariUtente == 'pari') && (pariDispari == false)) {
    console.log('hai perso');
} else if ((pariDispariUtente == 'dispari') && (pariDispari == false)) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}
