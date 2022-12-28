import React from "react";
import { View } from "react-native";
import { Stack, Text, TextInput, Button } from "@react-native-material/core";

const LoginScreen = () => {
    return (
        <View>
            <Stack spacing={5} style={{ margin: 16 }}>
                <Text variant="h4" style={{ textAlign: 'center' }}>Login</Text>
                <TextInput
                label="Email"
                variant="outlined"
                />
                <TextInput
                label="Password"
                variant="outlined"
                />
                <Button title="Login" />
            </Stack>
        </View>
    );
};

export default LoginScreen;