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

export default function Notification() {
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <View style={{backgroundColor:'#1C1C1C', flex:1}}>
                <ScrollView style={{flex:1}}>
                     <View style ={{width:"100%",height:'auto',marginVertical:15,flexDirection:"row", marginBottom:3,alignContent:'center'}}>
                        <Image source={Profile} style={{borderRadius:30, resizeMode:'cover', width:50, height:50,marginLeft:20}}></Image>
                         <View style = {{justifyContent:'center', paddingHorizontal:12,borderBottomWidth:1,width:"100%"}}>
                            <View style={{flexDirection:'row',alignItems:'center', }}>
                                <View style = {{width:"60%",height:'auto',}}>
                                    <Text style = {{fontFamily:'Montserrat',fontSize:12, color:'white',marginVertical:5}}>
                                     Sedra Rabe est intéressé par votre  publication publication publication
                                    </Text>       
                                 </View>
                                <Text style = {{fontFamily:'Montserrat',fontSize:8, color:'white',marginLeft:5}}>4h</Text>
                            </View>
                        </View>   
                    </View>          
                </ScrollView>
            </View>
        </View>
    );
}
