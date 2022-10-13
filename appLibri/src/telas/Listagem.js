import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import COLORS from "../const/Colors";
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';

const Listagem = ()=>{

    const [livros, setLivros] = useState([]);

    useEffect(
        ()=>{

            apiLivraria.get('/listarLivros')
            .then(
                (data)=>{
                    console.log(data.data[4]);
                    setLivros(data.data);
                }
            )

        },
        []
    );

    return(
        <ScrollView style={estilos.scroll}>
            <View style={estilos.container}>

                {
                    livros.map(
                        livro=>(
                            <TouchableOpacity key={livro.cod_livro} style={estilos.post} onPress={()=>{}}>
                                <View>
                                    <Image style={estilos.imagem} source={capaLivro150}/>
                                    <Text style={estilos.titulo}>{livro.titulo}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }

            </View>
        </ScrollView>
    );

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
    }

});

export default Listagem;