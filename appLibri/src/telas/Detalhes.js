import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import COLORS from "../const/Colors";
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';

const Detalhes = ({ route, navigation }) => {

    const {cod_livro} = route.params;

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
        ,[]
    );

    // FUNÇÃO DE EXCLUSÃO DE LIVROS
    const excluir =()=>{

        try {
         
            apiLivraria.delete(`/excluirLivros/${livro.cod_livro}`);
            navigation.navigate('Listagem');
            
        } catch (error) {
            
        }
    }

    return(
        <ScrollView style={estilos.scroll}>
            <View style={estilos.container}>

                <View style={estilos.post}>
                    <Image style={estilos.imagem} source={capaLivro150}/>
                    <Text style={estilos.titulo}>{livro.titulo}</Text>
                    <Text style={estilos.descricao}>{livro.descricao}</Text>
                </View>

                <View style={estilos.botoes}>

                    <TouchableOpacity style={estilos.botaoEditar} onPress={()=>{navigation.navigate('Editar', {'cod_livro':livro.cod_livro})}}>
                        <Text style={estilos.textoBotao}>EDITAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.botaoExcluir} onPress={()=>{excluir()}}>
                        <Text style={estilos.textoBotao}>EXCLUIR</Text>
                    </TouchableOpacity>

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
    botaoExcluir:{
        width:'50%',
        marginLeft:7.5,
        borderRadius:15,
        backgroundColor:COLORS.red,
    },
    botaoEditar:{
        width:'50%',
        marginLeft:7.5,
        borderRadius:15,
        backgroundColor:COLORS.blue,
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