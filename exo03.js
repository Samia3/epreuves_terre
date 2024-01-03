// Exercice afficher l'alphabet à partir d'une lettre donnée en argument

function argument (){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est une lettre 
    const lettreRegExp = /^[a-zA-Z]$/;
    
    if(arguments.length != 1 || !lettreRegExp.test(arguments[0])){
        console.log("veuillez mettre une seule lettre de l'alphbet en argument");
    }else if(process.argv[2].split('').length != 1){
        console.log("veuillez mettre une seule lettre de l'alphbet en argument");
    }else {
        processus();
    }
}

function processus(){
    // Variable pour stocker l'alphabet
    let alphabet = '';
    let lettre = process.argv[2];
    let newAlphabet = '';

    // Boucle pour chaque code ASCII de 'a' à 'z'
    for (let codeAscii = 97; codeAscii <= 122; codeAscii++) {
        // Convertit le code ASCII en lettre et concatène à la variable alphabet
        alphabet += String.fromCharCode(codeAscii);
    }

    const tableau = alphabet.split('');

    for(let i in tableau){
        if(lettre == tableau[i]){
            
            for(let j = i; j< tableau.length; j++){
                newAlphabet += tableau[j];
            }
        }
    }
    console.log(newAlphabet);
}

argument()