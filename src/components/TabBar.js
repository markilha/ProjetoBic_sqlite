import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import React from 'react';
import Lotes from '../pages/Lotes';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function TabBar() {

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
                }} />

            {/* Página dos lotes */}
            <Tab.Screen
                name="Lotes"
                component={Lotes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="terrain" size={24} color={color} />
                    )
                }}
            />

        </Tab.Navigator>

    )
}