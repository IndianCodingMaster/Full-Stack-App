import Button from "@/components/Button";
import InputBox from "@/components/InputBox";
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={{justifyContent: "center", backgroundColor: "#FAF9EE", paddingHorizontal: 15, flex: 1}}>
            <Text style={styles.title}>Login</Text>
            <InputBox inputTitle="Email" autoComplete="email" value={email} setValue={setEmail} />
            <InputBox inputTitle="Password" secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} />
            <View style={styles.Button}>
                <Button btnText="Login" />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, flexDirection: "row" }}>
                <Text style={{ fontSize: 18, marginRight: 10 }}>New User</Text>
                <TouchableOpacity onPress={() => router.push('/Register')}><Text style={{ color: "blue" }}>Register</Text></TouchableOpacity>
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