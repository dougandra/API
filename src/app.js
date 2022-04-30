import { openDb } from '../configDB.js';
import { createTable } from './controllers/fornecedores.js'

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res){

    res.send('olá mundo');
});

app.post('/pessoa', function(req,res){

     console.log(req.body);
     res.json({
    
         "status": 200
     })

});

app.listen(3000, ()=>console.log('API Rodando.'))