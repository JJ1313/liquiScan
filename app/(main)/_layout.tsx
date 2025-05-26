import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

import { Button } from '@/components/Button';
import { Colors } from '@/constants/Colors';

const { Navigator } = createDrawerNavigator();
const Drawer = withLayoutContext(Navigator);

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <DrawerItemList {...props} />
            <View style={{ flex: 1 }} />
            <Button
                title='Salir'
                onPress={() => console.log('Log out!')}
                variant='secondary'
                size='default'
            />
        </DrawerContentScrollView>
    );
}

export default function MainLayout() {
    const navigation = useNavigation();

    useEffect(() => {
        // Puedes abrir o cerrar el drawer programáticamente aquí
    }, [navigation]);

    return (
        <Drawer
            screenOptions={{
                drawerType: 'permanent',
                swipeEnabled: false,
                headerShown: false,
                drawerStyle: {
                    backgroundColor: Colors.dark.background,
                    width: 200,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                },
                drawerActiveTintColor: Colors.dark.softHighlight,
                drawerActiveBackgroundColor: Colors.dark.softHighlight,
                drawerInactiveTintColor: Colors.dark.softHighlight,
                drawerLabelStyle: {
                    color: Colors.dark.text,
                    fontSize: 16,
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        </Drawer>
    );
}



