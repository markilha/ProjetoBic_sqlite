import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import {header} from '../../components/Home/Headers'

const Headers = () => {
    return (
        <Header
            containerStyle={styles.headerContainer}
            //leftComponent={<Image source={require('../../../assets/icons/bar.png')} />}
            centerComponent={{ text: 'BICSHAPE', style: { ...styles.headerTitle } }}
        />
    );
};


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#CE8863',
        borderWidth: 5,
        borderBottomRightRadius: 100,
        height: '15%',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10

    },
    headerTitle: {
        width: 100,
        height: 100,
        fontFamily: 'HelveticaNeue',
        color: '#000',
        fontSize: 20,
    },
    headerRight: {
        width: 24,
        height: 24,
        marginHorizontal: 20
    }
});

export default Headers;