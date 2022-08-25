const express = require('express');

const app = express();

// ROTA GET DE TESTE:
app.get('/', (req, res)=>{
    res.send('RESPOSTA DA ROTA RAIZ');
});

// ROTA GET DE LISTAGENS DE DENTISTAS:
app.get('/listagemDentistas', (req, res)=>{
    res.send('RESPOSTA DA ROTA DE LISTAGEM DE DENTISTAS');
});

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000');
});