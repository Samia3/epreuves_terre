// Exercide inverser une chaine de caractère

function argument(){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est une chaine de caractère
    const saisie = /^[a-zA-Z\s]+$/;

    if(arguments.length != 1 || !saisie.test(arguments[0])){
        console.log("veuillez mettre un seul argument (juste des lettres entre guillemets).");
    }else{
        inverser();
    }
}

function inverser(){
    let lettre = process.argv[2];
    let result = '';

    for(let i= lettre.length -1; i >= 0 ; i--){
        result += lettre[i];
    }

    console.log(result);
}

argument();