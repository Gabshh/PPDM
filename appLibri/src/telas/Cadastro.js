import { loadPartialConfigAsync } from "@babel/core";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Colors";

const Cadastro = () => {

    const nome = 'TELA DE CADASTRO';

  return(

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

        <View style={estilos.viewForm}>

          <Input label="TITULO"/>
          <Input label="DESCRIÇÃO"/>
          <Input label="CAPA"/>
          <Button title="CADASTRAR"/>

        </View>
      </ScrollView>
    </SafeAreaView>

    
  );

}

const estilos = StyleSheet.create({

  safe:{
    flex:1,
    backgroundColor:COLORS.white,
  },
  scroll:{
    paddingHorizontal:20,
    paddingTop:50,
  },
  textTitle:{
    color:COLORS.black,
    fontSize:25,
    fontWeight:"bold",
  },
  viewForm:{
    marginVertical:20,
  },

});

export default Cadastro;