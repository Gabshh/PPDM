import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Login from "./src/telas/login";

const App = () => {

    const nome = 'SENAI - JANDIRA';

  return (
    // <View>

    //   <Text style={estilo} >

    //     {nome}

    //   </Text>

    // </View>

    <Login />

  );

}

const estilo = StyleSheet.create({
  container:{},
  titulo:{
    width:"100%",
    backgroundColor:"#F00",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"#FFF",
    fontWeight: "bold",
    padding:16,
  },

});

export default App;