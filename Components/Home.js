import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,  View, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'; 
import line from '../assets/line.png';

// Post's....

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tongasoa</Text>
            <Image source={line} style={{
                alignContent: 'center',
                justifyContent: 'center',

            }}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242945',
        overflow: 'visible',
    },
    text: {
        fontSize: 26,
        color: '#fff',
        fontHeight: 70,
        fontFamily: 'Montserrat-SemiBold',
    }
});