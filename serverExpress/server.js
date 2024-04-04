const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000; // Port sur lequel votre serveur écoutera

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Route pour récupérer toutes les dépenses depuis la base de données
app.get('/depenses', async (req, res) => {
  try {

// Code pour récupérer les dépenses depuis la base de données et les renvoyer en réponse
    Depense.find().then((Depense) =>{
        res.json(Depense)
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des dépenses' });
  }
});

// Route pour ajouter une nouvelle dépense à la base de données
// app.post('/depenses', async (req, res) => {
app.post('/depenses', async (req, res) => {
  try {
    
    // Code pour ajouter une nouvelle dépense à la base de données


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de la dépense' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
