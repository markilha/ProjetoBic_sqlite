import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { Entypo, AntDesign ,MaterialIcons} from '@expo/vector-icons';
export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toogleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6
        }).start();

        this.open = !this.open;
    }


    render() {
        const transLote = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60]
                    })
                }
            ]
        }
        const transProp = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -120]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}
                >
                    <Animated.View style={[styles.button, styles.submenu, transLote]}>                     
                        <MaterialIcons name="terrain" size={24} color="#F5AD47" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={this.props.onPress}
                >
                    <Animated.View style={[styles.button, styles.submenu, transProp]}>                     
                        <MaterialIcons name="people" size={24} color="#F5AD47" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={this.toogleMenu}
                >
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
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
    },
    menu: {
        backgroundColor: '#00213B',
    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#00213B',

    }
})
