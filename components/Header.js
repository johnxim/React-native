import React from "react";
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';

const Header = props => {
    return (
        <SafeAreaView style={{...styles.containerHeader, ...props.style}}>
            <Text style={styles.title}>{props.children}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    containerHeader: {
        height: '15%',
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Header;