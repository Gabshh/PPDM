//import { loadPartialConfigAsync } from "@babel/core";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Colors";

const Cadastro = () => {

  {/********** CAPTURA DE DADOS COM O USO DE STATE **********
  CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA OS DADOS DIGITADOS*/}

  const [inputs, setInputs] = React.useState({
    titulo: '',
    descricao: '',
    capa: '',
  });

  {/***********************************************************/}

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA STATE NO MÉTODO onChangeText
  const handlerOnChange = (text, input) => {
    setInputs( (prevState) => (
      console.log(prevState),
      //console.log(input + ' ' + text)

      //INJEÇÃO DE DADOS NA STATE 
      {...prevState, [input]:text}
      
      ));
  }

  {/***********************************************************/}

  {/********** VALIDAÇÃO DOS DADOS DE CADASTRO ***********/}
  
  // STATE DE ERRO DE PREENCHIMENTO
  const [errors, setErrors] = React.useState({});

  // FUNÇÃO HANDLER QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE
  const handlerErrors = (errorMessage, input) => {
    setErrors( (prevState)=>({...prevState, [input]:errorMessage}) );
  }

  // FUNÇÃO DE VALIDAÇÃO               
  const validate = () => {
    
    let validate = true;

    if (!inputs.titulo) {
      validate = false;
      handlerErrors('Informe o título do livro.', 'titulo');
      // console.log('TITULO EM BRANCO');
    }

    if (!inputs.descricao) {
      validate = false;
      handlerErrors('Informe a descrição do livro.', 'descricao');
      // console.log('DESCRICAO EM BRANCO');
    }

    if (!inputs.capa) {
      validate = false;
      handlerErrors('Informe a capa do livro.', 'capa');
      // console.log('CAPA EM BRANCO');
    }

    console.log(errors);

  }

  //const nome = 'TELA DE CADASTRO';

      return(

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

        <View style={estilos.viewForm}>

          <Input  label="TÍTULO"     error={errors.titulo}     onFocus={()=>(handlerErrors(null, 'titulo'))}    onChangeText={ (text) => handlerOnChange(text, 'titulo' )     }/>
          <Input  label="DESCRIÇÃO"  error={errors.descricao}  onFocus={()=>(handlerErrors(null, 'descricao'))} onChangeText={ (text) => handlerOnChange(text, 'descricao' )  }/>
          <Input  label="CAPA"       error={errors.capa}       onFocus={()=>(handlerErrors(null, 'capa'))}      onChangeText={ (text) => handlerOnChange(text, 'capa' )       }/>
          <Button title="CADASTRAR"  onPress={validate} />

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