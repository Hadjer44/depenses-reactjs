const express = require('express')
const app = express()
const port = 3001

const depenses_model = require ('./depensesModel');

//utiliser middlewares:
app.use(express.json());  //recevoir données json et les convertir en objet js
app.use(function(req, res, next){  //gestion des CORS (pour autorisation d'acces depuis react par exp !!)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


// Read
app.get('/', (req, res) => {
  depenses_model.getDepenses()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//Create
app.post('/depenses', (req, res) => {
  depenses_model.createDepense(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch( error => {
    res.status(500).send(express.response)
  })
} )


//update
//delete


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

