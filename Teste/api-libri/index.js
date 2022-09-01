//import do pacote express (node_modules)
const express = require('express');

const app = express();

// IMPORTAÇÃO DO ARQUIVO DE ROTAS DE LIVROS
const livroController = require('./controller/LivroController');

app.use('/', livroController);

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});