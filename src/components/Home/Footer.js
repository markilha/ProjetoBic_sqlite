import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default class FabButton extends Component {


    render() {

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}
                >
                    <AntDesign name="save" size={40} color="#FFF" />
                </TouchableWithoutFeedback>             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        }
    }
})
