import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './HeaderHomeScreen';
import NewPost from './PostField';
import TabBar from './TabBar';
import Profile from '../assets/rakooot.png';
import Post from './Post';
import data from './data';
import HomeSceen from './HomeScreen';
import MessageBox from './MessageBox';
// Post's....

export default function Navigation() {
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <MessageBox></MessageBox>
            <TabBar></TabBar>
        </View>
    );
}
