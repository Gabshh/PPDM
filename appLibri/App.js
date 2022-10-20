import React                          from "react";
import { View, Text, Button }         from "react-native";
import Cadastro                       from "./src/telas/Cadastro";
import Listagem                       from "./src/telas/Listagem";
import Detalhes                       from "./src/telas/Detalhes";
import Editar                         from "./src/telas/Editar";
import { NavigationContainer        } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Detail')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen}    />
    //     <Stack.Screen name="Detail" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        
        {/* <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title:'CADASTRO DE LIVROS'}}
        /> */}
    
        <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{title:'LISTAGEM DE LIVROS'}}
        />

        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{title:'DETALHES DO LIVRO'}}
        />

        <Stack.Screen
        name="Editar"
        component={Editar}
        options={{title:'EDIÇÃO DE LIVRO'}}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;