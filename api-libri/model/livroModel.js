//IMPORTAÇÃO DO SEQUELIZE
const Sequelize = require('sequelize');

//IMPORTAÇÃO DA CONEXÃO DO BANDO DE DADOS
const connection = require('../database/database');

/**************************************************
 REPRESENTAÇÃO DO MODELO DE DADOS tbl_livro
 PARÂMETROS DO MÉTODO define():
    1 - NOME DA TABELA
    2 - OBJETO JSON CONTENDO:
                        NOME DO CAMPO
                        TIPO DE DADO
                        REGRAS DO CAMPO
 *************************************************/

const LivroModel = connection.define(
    'tbl_livro',
    {
        cod_livro:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type: Sequelize.STRING(100),
            allowNull:true
        },
        descricao:{
            type: Sequelize.TEXT,
            allowNull:true
        },
        imagem:{
            type: Sequelize.STRING(500),
            allowNull:true
        },
    }
);

module.exports = LivroModel;