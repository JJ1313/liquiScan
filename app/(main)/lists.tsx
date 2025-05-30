import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { TragosList } from '@/components/TragosList';
import { useState } from 'react';

export default function Lists() {

    const piscos = [
        {
            id: 0,
            title: "Pisco Mistral 46° 750cc",
            image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            selected: false,
        },
        {
            id: 1,
            title: "Pisco Alto del Carmen 40° 700cc",
            image: "https://images.unsplash.com/photo-1610641812407-0b1a5c3a6f2f",
            selected: false,
        },
        {
            id: 2,
            title: "Pisco Capel Reservado 35° 1L",
            image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b",
            selected: false,
        },
        {
            id: 3,
            title: "Pisco Control C 40° 750cc",
            image: "https://images.unsplash.com/photo-1564758866819-71f08c1b6b2d",
            selected: false,
        },
        {
            id: 4,
            title: "Pisco Horcón Quemado 46° 700cc",
            image: "https://images.unsplash.com/photo-1603052877778-b0c7b7a6c0e0",
            selected: false,
        },
        {
            id: 5,
            title: "Pisco Fundo Los Nichos 40° 750cc",
            image: "https://images.unsplash.com/photo-1612036784852-0a7b1fd8b93e",
            selected: false,
        },
    ];

    const rones = [
        {
            id: 6,
            title: "Ron Abuelo Añejo 7 años 750cc",
            image: "https://images.unsplash.com/photo-1605276375725-f6c4213c9d84",
            selected: false,
        },
        {
            id: 7,
            title: "Ron Diplomático Reserva Exclusiva 700cc",
            image: "https://images.unsplash.com/photo-1620325811374-9a0187ac9c80",
            selected: false,
        },
        {
            id: 8,
            title: "Ron Bacardí Carta Blanca 1L",
            image: "https://images.unsplash.com/photo-1605187167395-78e9de04b6e6",
            selected: false,
        },
        {
            id: 9,
            title: "Ron Havana Club Añejo Especial 750cc",
            image: "https://images.unsplash.com/photo-1631049003743-5e3ff535c44c",
            selected: false,
        },
        {
            id: 10,
            title: "Ron Barceló Gran Añejo 700cc",
            image: "https://images.unsplash.com/photo-1623437681863-04b5f438c5a9",
            selected: false,
        },
        {
            id: 11,
            title: "Ron Zacapa Centenario 23 750cc",
            image: "https://images.unsplash.com/photo-1625581697572-0cf6e73cb255",
            selected: false,
        },
        {
            id: 12,
            title: "Ron Flor de Caña 12 años 750cc",
            image: "https://images.unsplash.com/photo-1616094896936-43c1ff381cb4",
            selected: false,
        },
    ];

    const vinos = [
        {
            id: 13,
            title: "Vino Concha y Toro Reservado Cabernet Sauvignon 750cc",
            image: "https://images.unsplash.com/photo-1584467735871-02f1d2700105",
            selected: false,
        },
        {
            id: 14,
            title: "Vino Casillero del Diablo Carmenere 750cc",
            image: "https://images.unsplash.com/photo-1582572840856-ff33aee2563b",
            selected: false,
        },
        {
            id: 15,
            title: "Vino Santa Rita 120 Merlot 750cc",
            image: "https://images.unsplash.com/photo-1562087967-9b9db63429ef",
            selected: false,
        },
        {
            id: 16,
            title: "Vino Tarapacá Gran Reserva Etiqueta Negra 750cc",
            image: "https://images.unsplash.com/photo-1528821121074-6c4c1a0a3c3f",
            selected: false,
        },
        {
            id: 17,
            title: "Vino Emiliana Adobe Orgánico Syrah 750cc",
            image: "https://images.unsplash.com/photo-1608568255182-308a5be3b36a",
            selected: false,
        },
        {
            id: 18,
            title: "Vino Montes Alpha Cabernet Sauvignon 750cc",
            image: "https://images.unsplash.com/photo-1514362545857-cd8563b7e83f",
            selected: false,
        },
        {
            id: 19,
            title: "Vino Undurraga Aliwen Reserva Pinot Noir 750cc",
            image: "https://images.unsplash.com/photo-1617191512914-6b6939b6c85d",
            selected: false,
        },
    ];

    const [selected, setSelected] = useState([]);
    return (
        <ScrollView style={styles.container}>
            <TragosList title='Piscos' selectedList={selected} setSelected={setSelected} list={piscos} />
            <TragosList title='Rones' selectedList={selected} setSelected={setSelected} list={rones} />
            <TragosList title='Vinos' selectedList={selected} setSelected={setSelected} list={vinos} />
        </ScrollView>
    );
}

export const options = {
    title: 'Listas',
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
    },
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
