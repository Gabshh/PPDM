//import do pacote express (node_modules)
const express = require('express');

const app = express();

app.use(express.json());

// IMPORTAÇÃO DO ARQUIVO DE ROTAS DE LIVROS
const livroController = require('./controller/livroController');

// '/' - raíz da aplicação
app.use('/', livroController);

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});