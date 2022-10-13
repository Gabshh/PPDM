import React                          from "react";
import { NavigationContainer        } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro                       from "./src/telas/Cadastro";
import Listagem                       from "./src/telas/Listagem";
import Detalhes                       from "./src/telas/Detalhes";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Detalhes/>

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={false}>
        
    //     <Stack.Screen
    //     name="Cadastro"
    //     component={Cadastro}
    //     options={{title:'CADASTRO DE LIVROS'}}
    //     />

    //     <Stack.Screen
    //     name="Cadastro"
    //     component={Cadastro}
    //     options={{title:'CADASTRO DE LIVROS'}}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>

  );

}

export default App;