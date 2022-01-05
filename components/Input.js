import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

const Input = props => {
    return (
        <TextInput style={{ ...styles.input, ...props.style }} />
    )
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize:20
    }
});

export default Input;