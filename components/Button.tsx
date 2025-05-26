import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button() {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log('Cerrar sesión');
            }}
            style={styles.container}
        >
            <Text style={styles.text}>Salir</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    text: {
        color: 'white',
    }
});
