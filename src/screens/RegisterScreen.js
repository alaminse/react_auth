import React from "react";
import { View } from "react-native";
import { Stack, Text, TextInput, Button } from "@react-native-material/core";

const RegisterScreen = () => {
    return (
        <View>
            <Stack spacing={5} style={{ margin: 16 }}>
                <Text variant="h4" style={{ textAlign: 'center' }}>Register</Text>
                <TextInput
                label="Name"
                variant="outlined"
                />
                <TextInput
                label="Email"
                variant="outlined"
                />
                <TextInput
                label="Password"
                variant="outlined"
                />
                <TextInput
                label="Re-Password"
                variant="outlined"
                />
                <Button title="Login" />
            </Stack>
        </View>
    )
}

export default RegisterScreen;