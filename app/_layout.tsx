import { Stack } from 'expo-router';

export default function RootLayout() {

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(main)"/>
            <Stack.Screen name="(bartender)"/>
            <Stack.Screen name="index"/>
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
