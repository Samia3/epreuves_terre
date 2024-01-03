// Exercice la division de deux entiers

function argument (){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length != 2 || !nombreRegExp.test(arguments[0]) || !nombreRegExp.test(arguments[1])){
        console.log("Veuillez mettre deux nombres entiers en argument.");
    }else {
        division();
    }
}

function division(){
    let num1 = process.argv[2];
    let num2 = process.argv[3];

    if (Number(num2) === 0) {
        console.log("Erreur : Le diviseur ne peut pas être zéro.");
    }else if (Number(num1) < Number(num2)) {
        console.log("Erreur : Le dividende doit être supérieur ou égal au diviseur.");
    }else{

        let result = Math.floor(Number(num1)/Number(num2));
        let reste = Number(num1) - (result * Number(num2));

        console.log(`resultat: ${result}`);
        console.log(`reste: ${reste}`);
    }
}

argument();