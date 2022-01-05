import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = props => {
    return (
        <TouchableOpacity  style={styles.buttonContainer} {...props}>
            <Text style={styles.buttonTitle}>{props.children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontSize: 20
    }
});

export default Button;