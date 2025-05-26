import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Ingresar" onPress={() => router.replace('/lists')} />
    </View>
  );
}
