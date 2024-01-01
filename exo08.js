function argument(){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est une chaine de caractère
    const saisie = /^-?\d+$/;

    if(arguments.length != 2 || !saisie.test(arguments[0]) || !saisie.test(arguments[1])){
        console.log("veuillez mettre deux chiffres en arguments.");
    }else if(process.argv[3] < 0){
        console.log("L'exposant ne doit pas être négatif.");
    }else{
        puissance();
    }
}

function puissance(){
    const num1 = process.argv[2];
    const num2 = process.argv[3];

    let result = 1;

    for(let i=0; i<= num2 -1; i++){
        result*=num1
    }

    console.log(result);

}

argument();