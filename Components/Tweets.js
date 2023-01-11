import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,  View, StyleSheet, Image, TextInput, Pressable, ScrollView, Dimensions } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'; 
import line from '../assets/line.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import Photo from '../assets/rakooot.png';
import NPhoto from '../assets/FRAME.png'

// Post's....

export default function Tweets() {
    const win = Dimensions.get('window');
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={{flex:1, backgroundColor: '#242945', width: '100%', height: '100%', flexDirection:'row', alignContent:'center', alignItems:'center', borderBottomWidth:1, borderColor:'#FFFFFF10'}}>
                    <Text style={styles.text}>tysynday</Text>
                    <View style={{paddingLeft:'40%', flexDirection:'row', alignContent:'center' }}>
                    <View style={{marginRight:10, backgroundColor:'#585858', borderRadius:900, paddingHorizontal:8, paddingTop:6}}><Ionicons name="search" size={20} color="#fff"/></View>
                    <View style={{marginRight:10, backgroundColor:'#585858', borderRadius:900, padding:5}}><Ionicons name="menu" size={25} color="#fff"/></View>
                    </View>
                </View>
                <View style={{flex:0.86, backgroundColor: '#242945', width: '100%',borderBottomWidth:1, borderColor:'#FFFFFF10' }}>
                    <View style={{width:'100%', backgroundColor:'#242945', alignContent:'space-between', alignItems:'center', alignSelf:'center', direction:'ltr', flexDirection:'row', justifyContent:'space-evenly', marginVertical:14}}>
                    <Ionicons name="home" size={25} color="#fff"/>
                    <Ionicons name="people" size={25} color="#fff"/>
                    <Ionicons name="md-chatbox-ellipses-outline" size={25} color="#fff"/>
                    <Ionicons name="notifications" size={25} color="#fff"/>
                    <Ionicons name="videocam" size={25} color="#fff"/>
                    </View>
                </View>
                <View style={{flex:8, backgroundColor: '#242945', width: '100%', height: '100%', }}>
                    
                <View style={{flex:7, backgroundColor: '#242945', width: '100%', height: '100%'}}>
                    <ScrollView style={{flex:1, paddingTop:2, flexDirection:'column'}}>
                    
                    <View style={{flex:1, backgroundColor: '#white', width: '100%', height: '100%', paddingVertical:4, borderBottomWidth:1}}>
                    <View style={{flex:1, flexDirection:'row', alignContent:'space-between', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Ionicons name="people-circle" size={50} color="#fff"/>
                        <TextInput style={{ borderWidth:1.2, backgroundColor:'#FFFFFF56', borderColor:'#FFFFFF56', borderRadius:100, height: 40,  fontSize: 14, fontFamily: 'Montserrat', color:'#FFF',marginHorizontal:1, paddingHorizontal:25, width:'55%'}} placeholder="A quoi pensez-vous?" ></TextInput>
                        <Pressable style={{}} onPress={()=>{}}>
                        <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat'}}>Publier</Text>
                        </Pressable>
                    </View>
                    </View><View style={{backgroundColor: 'red', width: '100%', height: 'auto', flex:1, borderBottomWidth:2 }}>
                        <View style={{width:'100%',height:'auto', backgroundColor:'#242945', paddingLeft:15, paddingTop:5, flexDirection:'row'}}>
                            <Ionicons name="people-circle" size={50} color="#fff"/>
                            <View style={{padding:9}}>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat-Bold'}}>Sedra Rabe</Text>
                                <Text style={{color:'#fff', fontSize:11, fontFamily: 'Montserrat'}}>12min ago</Text>
                            </View>
                        </View>
                        <View style={{ flex:7, overflow:'hidden', width:'100%', height:'100%'}}>
                            <Image source={Photo} style={{resizeMode:'cover', width:'100%', height:200 }}></Image>
                        </View>
                        <View style={{flex:1, backgroundColor:'#242945', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', padding:10 }}>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center'}}>
                                <Ionicons name="heart-outline" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>12</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center',marginHorizontal:5}}>
                                <Ionicons name="chatbubble-ellipses" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>14</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center'}}>
                                <Ionicons name="share-social" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>16</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'red', width: '100%', height: 'auto', flex:1, borderBottomWidth:2 }}>
                        <View style={{width:'100%',height:'auto', backgroundColor:'#242945', paddingLeft:15, paddingTop:5, flexDirection:'row'}}>
                            <Ionicons name="people-circle" size={50} color="#fff"/>
                            <View style={{padding:9}}>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat-Bold'}}>Zinô Davisy</Text>
                                <Text style={{color:'#fff', fontSize:11, fontFamily: 'Montserrat'}}>1 hour ago</Text>
                            </View>
                        </View>
                        <View style={{ flex:7, overflow:'hidden', width:'100%', height:'100%'}}>
                            <Image source={NPhoto} style={{resizeMode:'cover', width:'100%', height:200 }}></Image>
                        </View>
                        <View style={{flex:1, backgroundColor:'#242945', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', padding:10 }}>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center'}}>
                                <Ionicons name="heart" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>122</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center',marginHorizontal:5}}>
                                <Ionicons name="chatbubble-ellipses" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>144</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#FFFFFF10', alignItems:'center', alignSelf:'center', alignContent:'center', height:40, paddingHorizontal:10, borderRadius:20, justifyContent:'center'}}>
                                <Ionicons name="share-social" size={25} color="#fff"/>
                                <Text style={{color:'#fff', fontSize:14, fontFamily: 'Montserrat', padding:8}}>16</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242945',
        overflow: 'visible',
        paddingTop: 25,

    },
    text: {
        fontSize: 22,
        color: '#fff',
        fontHeight: 70,
        fontFamily: 'Montserrat-Bold',
        paddingLeft: 15, 
        
    }
});