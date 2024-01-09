//Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

function argument() {
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length != 3 || !nombreRegExp.test(arguments[0]) || !nombreRegExp.test(arguments[1]) || !nombreRegExp.test(arguments[2])){
        console.log("Veuillez mettre trois entier en argument svp.");
    }else if(Number(arguments[0]) === Number(arguments[1] || Number(arguments[0]) === Number(arguments[2]) || Number(arguments[1]) === Number(arguments[2]))){
        console.log("Il faut mettre des entiers différents.");
    }else {
        suisse();
    }
}

function suisse(){
    const arguments = process.argv.slice(2);
    let tmp;
    let flag = true;

    while(flag){
        flag = false;

        for(let i =0; i< arguments.length -1; i++){
            if(arguments[i] > arguments[i+1]){
                tmp = arguments[i];
                arguments[i] = arguments[i+1];
                arguments[i+1] = tmp;
                flag = true
            }
        }
    }

    console.log(arguments[1]);
    
}

argument();