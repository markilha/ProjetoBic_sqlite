import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Button} from 'react-native'

import Lotes from './src/pages/Lotes';
import NovoLote from './src/pages/NovoLote';
import Detalhes from './src/pages/Detalhes';
import Home from './src/pages/Home';
import Proprietarios from './src/pages/Proprietarios'
import NovoProprietario from './src/pages/NovoProprietario'
import DetalheProp from './src/pages/DetalheProp'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Menu"
          component={Home}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />

        <Stack.Screen
          name="Lotes"
          component={Lotes}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },               
          }}         
        />

        <Stack.Screen
          name="Novo Lote"
          component={NovoLote}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' }, 
                     
          }}
        />

        {/* proprietarios */}
        <Stack.Screen
          name="Lista de Proprietários"
          component={Proprietarios}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Novo Proprietario"
          component={NovoProprietario}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
         
        />

        <Stack.Screen
          name="Detalhe proprietáro"
          component={DetalheProp}
          options={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}