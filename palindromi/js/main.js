

var parolaUtente = prompt('scrivi una parola'); // chiedo la parola all utente


while (!isNaN(parolaUtente)) {  // finchè la parola non è un non numero
    var parolaUtente = prompt('non hai inserito una parola') // controllo che l utente abbia inserito una parola
}

var parolaUtenteLowercase = parolaUtente.toLowerCase(); // disattivo il case sensitive
var checkParola = isPalindrom(parolaUtenteLowercase);  // assegno alla funzione isPalindrom la parola utente

if (checkParola) {
    console.log('la tua parola', parolaUtente, 'è palindroma!');
} else {
    console.log('la tua parola', parolaUtente, 'non è palindroma');
}


function isPalindrom (str) {  //nome funzione e valore in entrata
    return str == str.split('').reverse().join('');  //divido la parola in lettere (si crea un array),inverto l ordine dell'array e trasformo l array in stringa
}
