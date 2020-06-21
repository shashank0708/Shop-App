import React from 'react'
import { Text, StyleSheet } from "react-native";

const DefaultText = props => {
    return (
        <Text style={{...styles.text, ...props.style}} {...props}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily:'proxima-nova',
        
    }
})

export default DefaultText