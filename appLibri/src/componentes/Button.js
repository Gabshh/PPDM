import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../const/Colors";

const Button = ({title}) => {

    return (

        <TouchableOpacity style={estilos.button} activeOpacity={0.9}>
            
            {/*<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={estilos.linearGradient}>*/}
            
            <Text style={estilos.title}>{title}</Text>

            {/*</LinearGradient>*/}

        </TouchableOpacity>

    );

}

const estilos = StyleSheet.create({
    button:{
        height:55,
        width:"100%",
        borderRadius:25,
        backgroundColor:COLORS.purple,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:18,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
});

export default Button;