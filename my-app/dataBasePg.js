
//  connecter nodejs à pg
const {Client} = require('pg')
const client = new Client({
    user : 'postgres',
    host: 'localhost',
    database: 'Depenses',
    password:'123',
    port:5432,
});

client.connect();

client.query(`SELECT * FROM Depense`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})

//afficher résutats avec la commande "node dataBasePg.js" 