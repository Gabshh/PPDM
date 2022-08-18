import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../const/Colors";

const Input = ({label, error, onFocus=()=>{}, ...props}) => {

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

                {/* Caixa de texto */}
                <TextInput 
                style={estilos.textInput}
                autoCorrect={false}
                onFocus={()=>{onFocus()}}
                {...props}
                />

            </View>

            <Text style={[estilos.errorMessage, {display: showText ? 'none' : 'flex' }]}>{error}</Text>
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
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",
    },
    textInput:{
        color:COLORS.blue,
        flex:1
    }
});

export default Input;