// Récupère le nom du fichier en cours d'exécution à partir de process.argv
const path = process.argv[1];

//split le chemin du fichier 
const nameFile = path.split('/');

// Affiche le nom du fichier
console.log(nameFile[nameFile.length - 1]);
