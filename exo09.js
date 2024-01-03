// Exercice calculer la racine d'un nombre entier 

function argument (){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length != 1 || !nombreRegExp.test(arguments[0]) || Number(arguments[0] < 0)){
        console.log("Veuillez mettre un seul nombre entier positif en argument");
    }else {
        racine();
    }
}

function racine() {
    
    let precision = 1e-6;
    let saisie = process.argv[2];

    if(Number(saisie) === 1 || Number(saisie) === 0){
        console.log(saisie);
    }

    let newNumber = saisie/2;

    while (true) {
        let numDiv = newNumber;
        newNumber = 0.5 * (newNumber + saisie/newNumber);

        if(Math.abs(newNumber - numDiv) < precision){
            break;
        }
    }

    console.log(newNumber.toFixed(2));
}
argument();
