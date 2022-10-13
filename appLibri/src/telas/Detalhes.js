import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import COLORS from "../const/Colors";
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';

const Detalhes = () => {

    const cod_livro = 1;

    const[livro, setLivro] = useState({
        cod_livro:'',
        titulo:'',
        descricao:'',
        imagem:'',
    });

    useEffect(
        ()=>{
            apiLivraria.get(`/listarLivros/${cod_livro}`)
            .then(
                (livro)=>{
                    setLivro(livro.data[0])
                }
            )
        }
    );

    return(
        <ScrollView style={estilos.scroll}>
            <View style={estilos.container}>
                <View style={estilos.post}>
                    <Image style={estilos.imagem} source={capaLivro150}/>
                    <Text style={estilos.titulo}>{livro.titulo}</Text>
                    <Text style={estilos.descricao}>{livro.descricao}</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const estilos = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:COLORS.darkBackground,
      },
    container:{
        alignItems:'center',
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:COLORS.darkInput,
        padding:15,
        marginVertical:5,
        borderRadius:5,
        elevation:5,
    },
    imagem:{
        borderRadius:5,
        marginVertical:16,
        marginLeft:16,
    },
    titulo:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.white,
    },
    descricao:{
        textAlign:'center',
        width:'100%',
        fontSize:16,
        color:COLORS.white,
    },
    botoes:{
        flex:1,
        flexDirection:'row',
        padding:10,
        justifyContent:'center',
    },
    botao:{
        width:'50%',
        marginHorizontal:10,
    },
    textoBotao:{
        padding:10,
        textAlign:'center',
        color:COLORS.white,
        fontWeight:'bold',
        fontSize:16,
    }
});

export default Detalhes;