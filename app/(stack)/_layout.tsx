import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: "Welcome", headerShown: false }}
            />
            <Stack.Screen name="login" options={{ title: "Welcome" }} />
        </Stack>
    );
};

export default StackLayout;
