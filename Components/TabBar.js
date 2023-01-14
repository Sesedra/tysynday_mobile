import React from "react";
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabBar(){
    return(
        <View style={{paddingHorizontal:10, backgroundColor:'#1C1C1C', width:'100%', height:60, flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:10}}>
                    <Ionicons name="home" size={25} color="cyan"/>
                    <Ionicons name="chatbubble" size={25} color="#fff"/>
                    <View style={{backgroundColor:'red', paddingHorizontal:12, paddingVertical:11, borderRadius:99999}}>
                    <Ionicons name="add" size={25} color="#fff"/>
                    </View>
                    <Ionicons name="notifications" size={25} color="#fff"/>
                    <Ionicons name="people" size={25} color="#fff"/>
            </View>)
}