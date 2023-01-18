import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,  View, StyleSheet, Image, TextInput, Button, Pressable, ImageBackground } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'; 
import line from '../assets/line.png';
import Logo from '../assets/black.png';
import image from '../assets/fond.png';

// Post's....

export default function Login() {

    const edges = useSafeAreaInsets();
    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/font/Montserrat-Regular.ttf'),
    })
    return (
        <SafeAreaProvider>
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.header}>
            <Image source={Logo} style={styles.logo}></Image>
            <Text style={styles.grandTitre}>Se connecter</Text> 
            <Text style={styles.descri}>Accedez à votre compte</Text>    
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Email" keyboardType='email-address'></TextInput>
                <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true}></TextInput>
                <Text style={styles.secondaryText}>Mot de passe oublié  ?</Text>

                <View style={{paddingVertical:30}}>
                    <Pressable style={styles.boutonPrimary} onPress={()=>{}}>
                        <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat'}}>Se connecter</Text>
                    </Pressable>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{textDecorationLine:'line-through', letterSpacing:75.9}}> </Text>
                    <Text style={styles.secondarySepText}> ou </Text>
                    <Text style={{textDecorationLine:'line-through', letterSpacing:75.9}}> </Text>

                    </View>
                    
                    <Pressable style={styles.boutonSecondary} onPress={()=>{}}>
                        <Text style={styles.primaryText}>Créer un compte</Text>
                    </Pressable>
                    </View>
            </View>
            </ImageBackground>
        </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#fff',
        overflow: 'visible',
        paddingHorizontal:30,
        paddingTop: 30,
    },
    header:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    body:{
        flex:3,
        paddingHorizontal:10,
        paddingTop: 30,
    },
    logo:{
        width: 40,
        height: 40,
    },
    grandTitre:{
        fontSize:30, 
        fontFamily: 'Montserrat-SemiBold', 
        paddingTop:15, 
        color:'#242945',
        fontWeight: 'bold',
    },
    descri:{
        fontSize:13, 
        fontFamily: 'Montserrat', 
        marginTop:-5,
        color:'#242945',
    },
    input:{
        borderWidth:1.2,
        borderColor:'#242945',
        borderRadius:5,
        height: 45,
        paddingHorizontal:10,
        fontSize: 14,
        fontFamily: 'Montserrat',
        color:'#242945',
        marginBottom: 15,
    },
    boutonPrimary: {
        backgroundColor: '#242945',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    boutonSecondary: {
        backgroundColor: '#fff',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#242945',
    },
    primaryText: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color:'#242945'
    },
    secondaryText: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color:'#585858', 
        paddingBottom: 15,
    },
    secondarySepText: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color:'#99354A', 
        paddingBottom: 15,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        },

});