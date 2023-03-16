function randomNumber(min , max){
    //genero un numero tra 1 e 5 per il computer
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function oddEven (numberToCheck){
    let result = "dispari";
    if(numberToCheck % 2 === 0){
        result = "pari";
    }else{
        //non farre nulla
    }
    return result;
}


let userChoice;
let userNumber;
//chiedo la scelta pari o dispari all utente
do{
    userChoice = prompt(`Scrivi "pari o "dispari"`).toLowerCase();

}while( userChoice !== "pari" && userChoice !== "dispari")

console.log(userChoice);

//chiedo all utente di scegliere un numero tra 1 e 5
do{
    userNumber = prompt("inserisci un numero da 1 a 5");
    userNumber = parseInt(userNumber);

}while(userNumber < 1 || userNumber > 5)
console.log(userNumber);

//inizzializzo var con funzione
let computerNum  = randomNumber(1,5);
console.log(computerNum);
//calcolo l operazione della somma
let somma = computerNum + userNumber;
console.log(somma);

//trasformo la somma i pari o dispari con funzione
somma = oddEven(somma);
console.log(somma);

//risultato finale
if(somma === userChoice){
    alert("HAI VINTO!");
}else{
    alert("HAI PERSO AHAHAAH");
}

