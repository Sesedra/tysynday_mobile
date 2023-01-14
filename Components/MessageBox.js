import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './HeaderHomeScreen';
import NewPost from './PostField';
import TabBar from './TabBar';
import Profile from '../assets/rakooot.png';
import Post from './Post';
import data from './data';

// Post's....

export default function MessageBox() {
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <View style={{backgroundColor:'#1C1C1C',width:'90%', height:'auto',marginTop:25,marginHorizontal:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{color:'#fff', fontSize:30, fontWeight:'bold', marginLeft:10}}>Messages</Text>
                <Ionicons name="search" size={25} color="#fff" style={{}}/>
            </View>
        </View>
    );
}
