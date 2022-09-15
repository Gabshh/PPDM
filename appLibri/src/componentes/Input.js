import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../const/Colors";

const Input = ({label, iconName, error, onFocus=()=>{}, ...props}) => {

    const [showText, setShowText] = useState(true)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((showText) => !showText)
        }, 1000) // 1000 = 1s

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <View style={estilos.formContainer}>

            <Text style={estilos.inputLabel}>{label}</Text>

            <View style={[estilos.inputContainer, {borderColor: error ? COLORS.errorRed : COLORS.light }]}>

                <Icon name={iconName} style={estilos.icon} />

                {/* Caixa de texto */}
                <TextInput 
                style={estilos.textInput}
                autoCorrect={false}
                onFocus={()=>{onFocus()}}
                {...props}
                />

            </View>

            <Text style={[estilos.errorMessage, {opacity: showText ? 0.2 : 1 }]}>{error}</Text>
            {/* <Text style={estilos.errorMessage}>{error}</Text> */}

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
        color:COLORS.blue,
    },
    errorMessage:{
        color:COLORS.errorRed,
        fontWeight:"bold",
    },
    inputContainer:{
        height:55,
        borderRadius:18,
        elevation: 3,
        backgroundColor:COLORS.darkInput,
        borderBottomColor:COLORS.blue,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",
    },
    textInput:{
        color:COLORS.white,
        flex:1
    },
    icon:{
        fontSize:22,
        color:COLORS.blue,
        marginRight:10,
    }
});

export default Input;