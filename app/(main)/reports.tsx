import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Reports() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Reportes
            </Text>
            <View >
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        minHeight: '100%',
    },
    title: {
        color: Colors.dark.text,
        height: 80,
        paddingInline: 60,
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        fontSize: 24,
        fontWeight: 500,
        borderColor: Colors.dark.text,
    },
});
