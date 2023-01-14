import React from "react";
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from '../assets/rakooot.png';
import { LinearGradient } from 'expo-linear-gradient';
import Sedra from '../assets/sedra.jpg'

export default function Post(props){
    return(
        <LinearGradient colors={['#474747', '#1C1C1C']} start={{x: 0, y: 0}} end={{x:0.80, y: 1}} style={{borderWidth:1,borderColor:'#474747', width:'88%',height:'auto',borderRadius:20,marginHorizontal:22, marginTop:10}}>
        <View style= {{width:"100%",height:'auto',borderRadius:20,marginBottom:6, }}>
            <View style ={{width:"100%",height:"auto",flexDirection:"row",marginTop:10, marginBottom:3}}>
                <Image source={props.ProfileImg} style={{borderRadius:30, resizeMode:'cover', width:45, height:45,marginLeft:20}}></Image>
                <View style = {{justifyContent:'center', paddingHorizontal:12}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fff'}}>{props.Username}</Text>
                    <Text style = {{fontFamily:'Montserrat',fontSize:10, color:'white'}}>{props.Date}</Text>
                </View>   
            </View>
            {props.PostImg&&<View style = {{overflow:'hidden', width:'100%', height:200, marginVertical:5}}>
                <Image source={props.PostImg} style={{resizeMode:'cover', width:'100%', height:200 }}></Image>
            </View>}
            {props.Description&&<View style = {{width:'90%',height:'auto',alignSelf:"center", marginVertical:6}}>
                <Text style = {{fontFamily:'Montserrat',fontSize:14, color:'white'}}>
                    {props.Description}
                </Text>
            </View>}
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5, marginBottom:10, marginHorizontal:15}}>
                <View style = {{flexDirection:'row'}}>
                    <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
                        {props.isLiked ? <Ionicons name="heart" size={25} color="cyan"/> : <Ionicons name="heart-outline" size={25} color="cyan"/>}
                        {props.Like && <Text style={{color:'white', fontFamily:'Montserrat', marginLeft:7}}>{props.Like}</Text>}
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="chatbox-outline" size={25} color="#fff"/>
                        <Text style={{color:'white', fontFamily:'Montserrat', marginLeft:7}}>{props.Comments}</Text>
                    </View>
                </View>
                <Ionicons name="md-send" size={25} color="#fff"/>
            </View>
        </View>
        </LinearGradient>
    )
}