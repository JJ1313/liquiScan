import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@/components/Button'
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Input } from '@/components/Input';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input placeholder='Correo' />
                <Input placeholder='Contraseña' variant='password'/>
            </View>
            <Button title="Ingresar" onPress={() => router.replace('/lists')} size='big' />
            <TouchableOpacity>
                <Text style={styles.textForgot}>
                    Olvidé mi contraseña
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    textForgot: {
        color: Colors.dark.text,
        fontSize: 15,
        marginTop: 13,
    }
});
