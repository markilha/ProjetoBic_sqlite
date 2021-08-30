import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons,Ionicons , } from '@expo/vector-icons'; 
import { Entypo, Feather, } from '@expo/vector-icons'

import React from 'react';
import Lotes from './pages/Lotes';
import NovoLote from './pages/NovoLote';
import Detalhes from './pages/Detalhes';
import Home from './pages/Home';
import ButtonNew from './components/ButtonNew'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (

        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: '#121212',
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle: {
                paddingBottom: 5,
                paddingTop: 5,
            }
        }
        }
        >
            {/* Página principal */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}/>

            {/* Página dos lotes */}
            <Tab.Screen
                name="Lotes"
                component={Lotes}
                options={{
                    tabBarIcon: ({ size, color }) => (                        
                        <MaterialIcons name="terrain" size={24} color={color}/>
                    )
                }}
            />
            {/* Págnina novo lote */}
            <Tab.Screen
                name="Novo Lote"
                component={NovoLote}
                // options={{
                //     tabBarLabel: '',
                //     tabBarIcon: ({ focused, size, color }) => (
                //         <ButtonNew size={size} color={color} focused={focused} />
                //     )
                // }}
            />
            {/* Página de detalhes do lote */}
            <Tab.Screen
                name="Detalhes"
                component={Detalhes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="terrain" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>

    )
}