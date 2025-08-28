import Button from "@/components/Button"
import InputBox from "@/components/InputBox"
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View>
            <Text style={styles.title}>Login</Text>
            <InputBox inputTitle="Name" autoComplete="name" value={name} setValue={setName} />
            <InputBox inputTitle="Email" autoComplete="email" value={email} setValue={setEmail} />
            <InputBox inputTitle="Password" secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} />
            <View style={styles.Button}>
                <Button btnText="Submit" />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, flexDirection: "row" }}>
                <Text style={{ fontSize: 18, marginRight: 10 }}>New User</Text>
                <TouchableOpacity><Text style={{ color: "blue" }}>Register</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FAF9EE",
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 36,
        textAlign: "center",
        marginBottom: 40
    },
    Button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
})