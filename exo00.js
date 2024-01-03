// Exercice afficher l'alphabet

// Variable pour stocker l'alphabet
let alphabet = '';

// Boucle pour chaque code ASCII de 'a' à 'z'
for (let codeAscii = 97; codeAscii <= 122; codeAscii++) {
    // Convertit le code ASCII en lettre et concatène à la variable alphabet
    alphabet += String.fromCharCode(codeAscii);
}

// Affiche l'alphabet sur une seule ligne
console.log(alphabet);
