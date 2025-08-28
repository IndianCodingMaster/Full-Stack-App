import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ btnText }) => {
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: "#FEE8D9",
        width: 180,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    btnText: {
        fontSize: 28
    }
})