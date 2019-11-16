import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,

    TouchableHighlight,
    TouchableOpacity,

    ImageBackground
    , Button, StyleSheet, AsyncStorage,
    ScrollView,
} from 'react-native';

export default class Profile extends Component{
    static navigationOptions = {
        title: 'HELTHODUCT',
        headerStyle: { Color: 'red',
            backgroundColor: '#3C3C3C',
            borderBottomColor: '#3C3C3C',



        },
        headerTitleStyle: { color: '#fff',fontFamily:'Roboto',right:0,
            marginLeft:'auto',


            fontSize:25},
    }

    render(){
        return( <View style={{backgroundColor:'#353535',height:'100%'}} >
                <Image source={require('./Excersises/gifs/profile.gif')}
                       style={{flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                           width:'90%',
                           margin:'5%',
                           overlayColor:'#353535',

                    height: '60%',borderRadius:35}} />
                    <Text style={{textAlign: 'center',margin:5,padding:15,color:'#fff',fontSize: 20}}>Our Developing Monkeys Is Still Developing Your Profile</Text>
            </View>)

    }
}