//IMPORTA O MÓDULO DO EXPRESS
const express = require('express');

const livroModel = require('../model/livroModel');

//CONFIGURAR RECURSO DE ROTEAMENTO (Router)
const router = express.Router();

//ROTA DE LISTAGEM DE LIVROS
router.get('/listarLivros', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE LIVROS');
});

//ROTA DE CADASTRO DE LIVROS
router.post('/cadastrarLivros', (req, res)=>{
    console.log(req.body);
    res.send('ROTA DE CADASTRO DE LIVROS');
});

//ROTA DE ALTERAÇÃO DE LIVROS
router.put('/alterarLivros', (req, res)=>{
    res.send('ROTA DE EDIÇÃO DE LIVROS');
});

//ROTA DE EXCLUSÃO DE LIVROS
router.delete('/excluirLivros', (req, res)=>{
    res.send('ROTA DE EXCLUIR LIVROS');
});

//livroModel.sync({force:true});

module.exports = router;