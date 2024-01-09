//Créez un programme qui détermine si une liste d’entiers est triée ou pas.

function argument() {
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length < 1){
        console.log("Veuillez mettre plus d'arguments dans votre liste svp.");
    }else{
        for(let i = 0; i < arguments.length; i++){
            if(!nombreRegExp.test(arguments[i])){
                console.log("Veuillez mettre que des entiers en arguments svp.");
                return;
            }
        }
        soort();
    }

}

function soort(){
    const arguments = process.argv.slice(2);
    let result = 0;

    for(let i = 0; i < arguments.length; i++){
        if(Number(arguments[i]) > Number(arguments[i+1])){
            result+=1;
        }
    }

    if (result != 0) {
        console.log("Pas triée");
    }else{ 
        console.log("Trié");
    }

}

argument();