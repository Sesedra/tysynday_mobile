import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import HomeScreen from './Components/HomeScreen';
import Navigation from './Components/Navigation';

export default function App() {

  useEffect(()=>{
    async function loadFonts(){
      await Font.loadAsync({
        'Montserrat': require("./assets/font/Montserrat-Regular.ttf"),
        'Montserrat-SemiBold': require('./assets/font/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('./assets/font/Montserrat-Bold.ttf'),
      }).then(res=>{
        console.log("FONTS LOADED!");
        setLoaded(true)
      }).catch(Err=>{
        setLoaded(true);
        console.log(Err);
      }); 
    }

    loadFonts();
  },[])
  return (
    <SafeAreaProvider>
        {/* <HomeScreen/> */}
        <Navigation>
        </Navigation>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});