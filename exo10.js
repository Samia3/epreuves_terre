// Programme qui affiche si un nombre est premier ou pas 

function argument() {
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length != 1 || !nombreRegExp.test(arguments[0]) || Number(arguments[0] < 0)){
        console.log("Veuillez mettre un seul nombre entier positif en argument.");
    }else {
        premier();
    }
}

function premier() {
    
    // Convertir l'entrée en nombre entier
    const saisie = parseInt(process.argv[2]);
    let result = 0;

    if(saisie < 2){
        console.log(`Non, ${saisie} n'est pas un nombre premier.`);
    }else{
        for(let i=2; i < saisie; i++){
            if(saisie % i === 0){
                result+=1;
                break;
            }
        }

        if(Number(result) === 0){
            console.log(`Oui, ${saisie} est un nombre premier.`);
        }else{
            console.log(`Non, ${saisie} n'est pas un nombre premier.`);
        }

    }

}

argument();