// process.argv est un tableau (array) en Node.js qui contient les arguments de la ligne de commande. Plus précisément, il contient les éléments suivants :

// process.argv[0]: Chemin vers l'exécutable Node.js.
// process.argv[1]: Chemin vers le script Node.js en cours d'exécution.
// process.argv[2] et au-delà: Les arguments fournis par l'utilisateur lors de l'exécution du script.


// Récupère le nom du fichier en cours d'exécution à partir de process.argv
const path = process.argv[1];

//split le chemin du fichier 
const nameFile = path.split('/');

// Affiche le nom du fichier
console.log(nameFile[nameFile.length - 1]);
