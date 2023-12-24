function argument (){
    // Récupère les arguments à partir du deuxième index
    const arguments = process.argv.slice(2);

    //expression régulière pour vérifier si l'argument est un nombre entier 
    const nombreRegExp = /^-?\d+$/;
    
    if(arguments.length != 1 || !nombreRegExp.test(arguments[0])){
        console.log("veuillez mettre un seul nombre entier en argument");
    }else {
        parite();
    }
}

function parite() {
    let nombre = process.argv[2];

    if(nombre%2 == 0){
        console.log(`le nombre ${nombre} est pair`);
    }else{
        console.log(`le nombre ${nombre} est impair`);
    }

}
argument();