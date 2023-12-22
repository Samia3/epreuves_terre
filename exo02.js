// Récupère tous les arguments du fichier en cours d'exécution
const arguments = process.argv;

// Boucle sur les arguments au delà du nom du fichier
for (let i = 2; i < arguments.length; i++) {
    console.log(process.argv[i]);
}