import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../const/Colors";

const Input = ({label, ...props}) => {
    return (
        <View style={estilos.formContainer}>

            <Text style={estilos.inputLabel}>{label}</Text>

            <View style={estilos.inputContainer}>

                {/* Caixa de texto */}
                <TextInput 
                style={estilos.textInput}
                autoCorrect={false}
                {...props}
                />

            </View>

        </View>

    );
}

const estilos = StyleSheet.create({
    formContainer:{
        marginBottom:20,
    },
    inputLabel:{
        marginVertical:5,
        fontSize:15,
        color:COLORS.gray,
    },
    inputContainer:{
        height:55,
        borderRadius:10,
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",
    },
    textInput:{
        color:COLORS.darkBlue,
        flex:1
    }
});

export default Input;