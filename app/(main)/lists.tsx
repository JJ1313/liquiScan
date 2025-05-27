import { View, Text, StyleSheet } from 'react-native';

export default function Lists() {
    return (
        <Text>
            LISTS
        </Text>
    );
}

export const options = {
    title: 'Listas',
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
