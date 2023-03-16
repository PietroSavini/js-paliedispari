function isPalindrome(word) {
    // Controlla se la stringa al contrario è uguale a quella originale
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }else{
        //non fare nulla
      }
    }
  
    return true;
  }
  
  // funzione con prompt per l'input dell'utente
  const userInput = prompt("Inserisci una parola:");
  if (isPalindrome(userInput)) {
    console.log(`${userInput} è palindroma!`);
  } else {
    console.log(`${userInput} non è palindroma.`);
  }

  