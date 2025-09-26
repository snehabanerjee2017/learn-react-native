import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from '../config/colors';
function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.png")}
        >
            <View style={styles.logoContainer} >  
                <Image
                    style={styles.logo}
                    source={require("../assets/person_icon.png")}
                ></Image>
                <Text>Indian Fusion Desserts and Custom Cakes</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { 
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    }
})

export default WelcomeScreen;