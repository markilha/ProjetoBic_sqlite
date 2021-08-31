import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { homeStyles } from '../Home/Home.style';

import FabButton from '../../components/FabButton';
import { Footer } from '../../components/Home/Footer' 

export default function Home({ navigation }) {

    return (
        <>
            <View style={homeStyles.container}>

                <View style={homeStyles.iconContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Lotes")}
                            style={homeStyles.containerButton}>
                            <View style={homeStyles.iconWrapper}>
                                <MaterialIcons name="terrain" size={24} color="#F5AD47" />
                            </View>
                            <Text style={homeStyles.textButton}>Cadastro{"\n"}Lotes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Lista de Proprietários")}
                            style={homeStyles.containerButton}>
                            <View style={homeStyles.iconWrapper}>
                                <MaterialIcons name="people" size={24} color="#F5AD47" />
                            </View>
                            <Text style={homeStyles.textButton}>Cadastro{"\n"}Proprietários</Text>
                        </TouchableOpacity>

                    </View>


                </View>
                {/* <FabButton
                    style={{ top: 470, right: 35 }}
                    onPress={() => navigation.navigate("Lotes")}
                /> */}

            </View>
        </>
    )
}

