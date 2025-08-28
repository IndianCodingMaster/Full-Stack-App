import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputBox = ({ inputTitle, secureTextEntry, autoComplete, value, setValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{inputTitle}</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                autoComplete={autoComplete}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        // gap: 10  
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        paddingLeft: 10
    },
    input: {
        height: 60,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        fontSize: 24,
        paddingLeft: 20,
        marginBottom: 10,
    }
})