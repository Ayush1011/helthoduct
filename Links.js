import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    Dimensions,
    FlatList,
    TouchableOpacity, AsyncStorage, TouchableHighlight, Linking
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Storage from 'react-native-storage';
import {BoxShadow} from 'react-native-shadow'

import NotificationPopup from 'react-native-push-notification-popup';


export default class Links extends React.Component{



    render(){
        return(

            <View style={{backgroundColor:'powderblue'}}>
<ScrollView>
    <View style={{backgroundColor:'#fff',height:500,borderBottomLeftRadius:170}}>
    <Text style={{fontSize: 35,marginLeft: '5%',margin:'1%',fontWeight:'light'}}>Rate</Text>
    <Text style={{fontSize: 35,marginLeft: '5%',margin:'1%',fontWeight:'bold'}}>Daily Fitness</Text>

        <View style={{flex:1,borderBottomLeftRadius:45}}>
            <Image source={require('./Excersises/mainImage/first.gif')} style={{flex:1,height:undefined,width:undefined}}/>

        </View>


    </View>
    <View style={{height:550,backgroundColor:'0xff32a05f'}}>

        <TouchableOpacity style={{height:80,backgroundColor:'skyblue',margin:15,borderBottomLeftRadius:45,borderTopRightRadius:45}} onPress={ ()=>{ Linking.openURL('https://fb.com/healthoduct4')}}>


            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:.5,borderBottomLeftRadius:45}}>
                    <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                           source={require('./images/facebook.png')}/>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',alignItems:'center',marginTop:'13%',color:'#fff'}}> Visit Us On Facebook </Text>
                </View>

            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{height:80,backgroundColor:'skyblue',margin:15,borderBottomLeftRadius:45,borderTopRightRadius:45}} onPress={() => Linking.openURL('mailto:healthoduct@gmail.com?cc=contact to Daily Fitness &body=Happy to help\n')}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:.5,borderBottomLeftRadius:45}}>
                    <Image style={{flex:.8 , width: 100, height: 100,borderRadius:15}}
                           source={require('./images/gmail.png')}/>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',alignItems:'center',marginTop:'11%',color:'#fff'}}> Mail Us On Gmail</Text>
                </View>

            </View>

        </TouchableOpacity>


        <TouchableOpacity style={{height:80,backgroundColor:'skyblue',margin:15,borderBottomLeftRadius:45,borderTopRightRadius:45}} onPress={() => Linking.openURL('https://instagram.com/healthoduct2')}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:.5,borderBottomLeftRadius:45}}>
                    <Image style={{flex:.9 , width: 80, height: 90,borderRadius:15}}
                           source={require('./images/instagram.png')}/>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',alignItems:'center',marginTop:'11%',color:'#fff'}}> Visit Us On Instagram</Text>
                </View>

            </View>

        </TouchableOpacity>


        <TouchableOpacity style={{height:80,backgroundColor:'skyblue',margin:15,borderBottomLeftRadius:45,borderTopRightRadius:45}} onPress={() => Linking.openURL('https://pintrest.com/healthoduct')}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:.5,borderBottomLeftRadius:45,marginLeft:5}}>
                    <Image style={{flex:.9 , width: 80, height: 90,borderRadius:15}}
                           source={require('./images/pintrest.png')}/>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',alignItems:'center',marginTop:'11%',color:'#fff'}}> Visit Us On Pintrest</Text>
                </View>

            </View>

        </TouchableOpacity>


        {/*<TouchableOpacity style={{height:80,backgroundColor:'skyblue',margin:15,borderBottomLeftRadius:45,borderTopRightRadius:45}} onPress={() => Linking.openURL('mailto:ayushraichand1@gmail.com?cc=Upload your needs &body=Happy to help\n')}>*/}
        {/*    <View style={{flex:1,flexDirection:'row'}}>*/}
        {/*        <View style={{flex:.3,}}>*/}
        {/*            <Image style={{flex:.8 , width: 90, height: 90,borderRadius:15}}*/}
        {/*                   source={require('./images/tectron.png')}/>*/}
        {/*        </View>*/}
        {/*        <View style={{flex:.7,}}>*/}
        {/*            <Text style={{fontSize:15,fontWeight:'bold',alignItems:'center',marginTop:'5%',color:'#fff'}}> Powerded by TechTronX</Text>*/}
        {/*        </View>*/}

        {/*    </View>*/}


        {/*</TouchableOpacity>*/}

    </View>

</ScrollView>

            </View>


        )
    }
}