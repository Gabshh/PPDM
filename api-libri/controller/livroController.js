//IMPORTA O MÓDULO DO EXPRESS
const express = require('express');

const livroModel = require('../model/livroModel');

//CONFIGURAR RECURSO DE ROTEAMENTO (Router)
const router = express.Router();

//ROTA DE LISTAGEM DE LIVROS
router.get('/listarLivros', (req, res)=>{

    // res.send('ROTA DE LISTAGEM DE LIVROS');
    livroModel.findAll()
    .then(
        (livros)=>{
            res.status(200).send(livros);
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MSG":error});
        }
    );

});

//ROTA DE LISTAGEM DE LIVROS POR CÓDIGO DO LIVRO
router.get('/listarLivros/:cod_livro', (req,  res)=>{

    let { cod_livro } = req.params;

    livroModel.findAll({
        where:{
            cod_livro
        }
    })
    .then(
        (livro)=>{
            res.status(200).send(livro);
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MSG":error});
        }
    );

    /** POR CHAVE PRIMÁRIA */
    // livroModel.findByPk(cod_livro)
    // .then(
    //     (livro)=>{
    //         res.status(200).send(livro);
    //     }
    // )
    // .catch(
    //     (error)=>{
    //         res.status(500).json({"MSG":error});
    //     }
    // );

});

//ROTA DE CADASTRO DE LIVROS
router.post('/cadastrarLivros', (req, res)=>{
    
    // console.log(req.body);
    // res.send('ROTA DE CADASTRO DE LIVROS');

    let { titulo, descricao, imagem } = req.body;
    // console.log(req.body);
    // res.status(200);

    // Montar a insert na tabela
    livroModel.create({
        titulo,
        descricao,
        imagem
    }).then(
        ()=>{
            res.status(201).json({"MSG":"LIVRO INSERIDO COM SUCESSO!"});
        }
    ).catch(
        (error)=>{
            res.status(500).json({"MSG":error});
        }
    );

});

//ROTA DE ALTERAÇÃO DE LIVROS
router.put('/alterarLivros', (req, res)=>{
    // res.send('ROTA DE EDIÇÃO DE LIVROS');

    let { titulo, descricao, imagem, cod_livro } = req.body;

    livroModel.update(
        {
        titulo,
        descricao,
        imagem
        },
        {where:{cod_livro}}
    )
    .then(
        ()=>{
            res.status(200).json({"MSG":"LIVRO EDITADO COM SUCESSO."});
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MSG":error});
        }
    );

});

//ROTA DE EXCLUSÃO DE LIVROS
router.delete('/excluirLivros/:cod_livro', (req, res)=>{
    
    // res.send('ROTA DE EXCLUIR LIVROS');

    let {cod_livro} = req.params;

    livroModel.destroy({
        where:{cod_livro}
    })
    .then(
        ()=>{
            res.status(200).json({"MSG":"LIVRO EXCLUÍDO COM SUCESSO."});
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MSG":error});
        }
    );

});

//livroModel.sync({force:true});

module.exports = router;