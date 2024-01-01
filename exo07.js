function argument(){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est une chaine de caractère
    const saisie = /^[^\d]+$/;

    if(arguments.length != 1 || !saisie.test(arguments[0])){
        console.log("veuillez mettre un seul argument (juste des lettres entre guillemets).");
    }else{
        taille();
    }
}

function taille(){
    let saisie = process.argv[2];
    let result = 0;

    for(let i=0; i <= saisie.length - 1 ; i++){
        
        result += 1;
    }

    console.log(result);
}

argument();