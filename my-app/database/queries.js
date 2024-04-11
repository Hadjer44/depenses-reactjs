const { response } = require('express');

//  connecter nodejs à pg
const Pool = require('pg').Pool
const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'Depenses',
    password:'123',
    port:5432,
});

// pool.connect();



// creer les requetes qu'on va utiliser/appeler ensuite dans connectingServer.js


// Importez la connexion à la base de données "dep"
// const dep = require('./connexion_db');

// Fonction pour récupérer toutes les dépenses
// const getDepenses = (req, res) =>{
//     pool.query("SELECT * FROM Depense",  (error, results)=>{
//         if(error){
//             throw(error);
//             console.log(error);
//         }
//         response.status(200).json(results.rows)
//     })
// }


const getDepenses = async () => {
    try {
        // Retourner une promesse pour la gestion asynchrone
        return await new Promise(function (resolve, reject) {
            // Utilisation de la connexion à la base de données pour exécuter la requête SQL
            pool.query("SELECT * FROM Depense", (error, results) => {
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
        const {titre, amount, date} = Request.body;
        pool.query=(
            "INSERT INTO Depense (titre, amount, date) values ($1, $2, $3) RETURNING *",
            [titre, amount, date],
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
    createDepense,
}