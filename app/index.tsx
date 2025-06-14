import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@/components/Button'
import { Input } from '@/components/Input';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { loginUser } from '@/utils/auth';
import { router } from 'expo-router';
import { getSession, saveSession } from '@/utils/session';

export default function Index() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [checkingSession, setCheckingSession] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        if (username === '' || password === '') {
            setError(true);
            return;
        }
        setLoading(true);
        const { token, user } = await loginUser({ username, password });
        // Creacion session
        if (!token) {
            setLoading(false);
            return;
        }
        console.log(user);
        await saveSession({ token, user });
        if (user.role === 'admin') {
            router.replace('/(main)/lists');
        } else if (user.role === 'bar') {
            router.replace('/(bartender)/barsBartender');
        } else {
            console.log('Error: Rol de usuario no es válido');
        }
        setLoading(false);
    };

    if (loading || checkingSession) {
        return (
            <View style={styles.container}>
                <Text style={{ color: Colors.dark.text }}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#777777', marginBottom: 20 }}>
                username: admin o bar
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Nombre de usuario' value={username} onChange={setUsername} />
                <Input placeholder='Contraseña' variant='password' value={password} onChange={setPassword} />
            </View>
            {error &&
                <Text style={styles.textError}>Error en los datos</Text>
            }
            <View style={{ marginTop: 50, display:'flex', alignItems:'center' }}>
                <Button title="Ingresar" onPress={handleLogin} size='big' />
                <TouchableOpacity>
                    <Text style={styles.textForgot}>Olvidé mi contraseña</Text>
                </TouchableOpacity>
            </View>
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
    },
    textForgot: {
        color: Colors.dark.text,
        fontSize: 15,
        marginTop: 13,
    },
    textError: {
        color: Colors.dark.error,
        textTransform: 'uppercase',
        paddingBlock: 10,
        fontWeight: 600,
    }
});
