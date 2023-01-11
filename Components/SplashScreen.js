import { View, Text, StatusBar, Image, StyleSheet, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from '../assets/intro.png'
import Home from "./Home";
import React, { useRef, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


export default function SplashScreen() {const fetchFonts = () => {
    return Font.loadAsync({
    'MontserratRegular': require('../assets/font/Montserrat-Regular.ttf'),
    });
    };

    const [fontloaded,setfontloaded]=useState(false);

    if(!fontloaded){
        return(
          <AppLoading
          startAsync={fetchFonts}
          onFinish={()=>{setfontloaded(true)}}
          onError={console.warn}/>
        )
      }

//   useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 0,
//         duration: 8000,
//       }
//     ).start();
//   }, [fadeAnim])
//   useEffect(() => {
//     Animated.timing(
//       fadeAnimout,
//       {
//         toValue: 1,
//         duration: 8000,
//       }
//     ).start();
//   }, [fadeAnim])

    return (
        <View style={{flex:1}}>
            <Animated.View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Image source={Logo} style={styles.logo}/>
            </Animated.View>
        </View>
    )

} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 500,
        height: 500,
        resizeMode: "contain",
    },
  });