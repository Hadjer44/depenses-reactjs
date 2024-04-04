
//  connecter nodejs à pg
const Dep = require('pg').Pool
const dep = new Dep({
    user : 'postgres',
    host: 'localhost',
    database: 'Depenses',
    password:'123',
    port:5432,
});

// creer les requetes qu'on va utiliser/appeler ensuite dans index.js

//select all
// constgetDepenses = async() =>{
//     try{
//         return await new Promise(function(resolve, reject){
//             dep.query("select * from Depense", (error, results) => {
// if(error){
//     reject(error);
// }
// if(results && results.rows){
//     resolve(results.rows);
// } else {
//     reject(new Error("Aucune dépense trouvées !!"))
// }
//             });
//         });
    
// } catch(error_1) {
//     console.error(error_1);
//     throw new Error( "Internal server error")
// }
// };



// Importez la connexion à la base de données "dep"
// const dep = require('./connexion_db');

// Fonction pour récupérer toutes les dépenses
const getDepenses = async () => {
    try {
        // Retourner une promesse pour la gestion asynchrone
        return await new Promise(function (resolve, reject) {
            // Utilisation de la connexion à la base de données pour exécuter la requête SQL
            dep.query("SELECT * FROM Depense", (error, results) => {
                if (error) {
                    // Rejeter la promesse en cas d'erreur
                    reject(error);
                }
                if (results && results.rows) {
                    // Résoudre la promesse avec les résultats de la requête
                    resolve(results.rows);
                } else {
                    // Rejeter la promesse avec une erreur si aucune dépense n'est trouvée
                    reject(new Error("Aucune dépense trouvée !!"));
                }
            });
        });

    } catch (error_1) {
        // Gérer les erreurs et renvoyer un message d'erreur approprié
        console.error(error_1);
        throw new Error("Erreur interne du serveur");
    }
};





//CREATE
const createDepense = (body) => {
    return new Promise(function(resolve, reject){
        const {titre, amoun, date} = body;
        dep.query=(
            "INSERT INTO Depense (titre, amoun, date) values ($1, $2, $3) RETURNING *",
            [titre, amoun, date],
            (error, results) =>{
                if(error){
                    reject(error);
                }
                if(results && results.rows){
                    resolve('a new expence has been added: ${JSON.stringify(results.rows[0])}'
                    );
                }else {
                    reject(new Error("No results found"));
                }
            }
            )
    })
}




// Exporter la fonction pour pouvoir l'utiliser dans d'autres fichiers
module.exports={
    getDepenses,
    createDepense
}