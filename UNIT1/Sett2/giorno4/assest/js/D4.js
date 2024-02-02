/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
area = (l1, l2) => {
    let area1 = l1 * l2;
    return area1;
}
let risultato = area(6, 5)
console.log(risultato)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
crazySum = (numero1, numero2) => {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3;
    }
    else {
        return numero1 + numero2;
    }


}




console.log(crazySum(4, 4))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
crazyDiff = (n) => {
    if (n > 19) {
        return (n - 19) * 3;
    }
    else if (n < 19) {
        return n - 19;
    }

}
console.log(crazyDiff(20))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
boundary = (n1) => {
    if (n1 >= 20 && n1 <= 100 || n1 === 400) {
        return true;
    }
    else {
        return false;
    }


}
console.log(boundary(401))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
epify = (stringa) => {
    if (stringa.startsWith("EPICODE")) {
        return stringa;
    }
    else {
        return " EPICODE " + stringa;
    }

}
console.log(epify("mi chiamo Sabrina "))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
check3and7 = (np) => {
    if (np % 3 === 0 || np % 7 === 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log(check3and7(17))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
reverseString = (stringa2) => {
    return stringa2.split('').reverse().join('');
}
console.log(reverseString("EPICODE"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
upperFirst = (stringa3) => {
    return stringa3.split(' ')
        .map(parola => parola.charAt(0).toUpperCase() + parola.slice(1))
        .join(' ');
}
console.log(upperFirst("mi chiamo sabrina"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

cutString = (stringa4) => {
    return stringa4.slice(1, -1);

}
console.log(cutString("sabrina"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

giveMeRandom = (n) => {

    const arrayNuovo = [];
    for (let i = 0; i < n; i++) {
        let arrayNuovo2 = Math.floor(Math.random() * 11);
        arrayNuovo.push(arrayNuovo2);

    } return arrayNuovo;
}
console.log(giveMeRandom(7))
/* SCRIVI QUI LA TUA RISPOSTA */
