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



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabNavigator from './navigator'


import styled from "styled-components/native"; // 3.1.6
import Carousel from 'react-native-snap-carousel';
import Weightloss from'./Excersises/Weightloss'
export class HomePage extends Component {

    static navigationOptions = {
        title: 'HELTHODUCT',
        headerStyle: { Color: 'red',
            backgroundColor: '#b4abb4',
            borderBottomColor: '#ffffff',



        },
        headerTitleStyle: { color: '#fff',fontFamily:'Roboto',right:0,
            marginLeft:'auto',


        fontSize:25},
    }
        constructor(props){
        super();
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
    }

    init(){
        this.state = {
            videos: [
                {
                    id: "1",
                    thumbnail: "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2018/10/musicworkout_getty.jpg",
                    title: "Flat Stomach",
                    content:"Lorem ipsum dolor sit amet, g elit, rud exercitation ullamclaboris nisi ut aliquip excommodo consequat."
                }, {
                    id: "2",
                    thumbnail: "https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/juan-pablo-rodriguez-693578-unsplash-1068x712.jpg",
                    title: "Chest Increment",
                    content:"Lorem ipsum dolor sit amet, g elit, rud exercitation ullamclaboris nisi ut aliquip excommodo consequat."

                }, {
                    id: "3",
                    thumbnail: "https://media1.popsugar-assets.com/files/thumbor/L-7Qk36Fv-Pw5WnHPeR-uz_MilI/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2018/06/28/748/n/1922729/d027f5955b35136b578e82.53707190_/i/HIIT-Workout-Lose-Belly-Fat.jpg",
                    title: ""
                }
            ]
        };

        console.log("ThumbnailCarousel Props: ", this.props)
    }

    handleSnapToItem(index){
        console.log("snapped to ", index)
    }

    forward=(a)=>{
        if(a==1){
            this.props.navigation.navigate('Weightloss')
        }
    }



    _renderItem = ( {item, index} ) => {
        return (


                <TouchableOpacity
onPress={()=>this.forward(item.id)}
style={{borderRadius:15,}}
                >


                    <ImageBackground    imageStyle={{ borderRadius: 30}}
                                        style={{top: 15,height: '98%',
                        borderRadius: 5,}} source={{ uri: item.thumbnail }} >

                    <View style={{flex:1,justifyContent: 'center',
                        alignItems: 'center'}}>
                        <Text style={{padding:'5%',
                            alignItems: "center",marginRight:'auto',
                            justifyContent:"flex-start",

                            alignSelf: 'center',


                            color:'#fff',borderColor:'#fff',fontWeight: 'bold',textAlign: "center",fontSize: 25}}>
                            {item.title}
                            </Text>
                    </View>

                    <View style={{flex:1,justifyContent: "center",alignItems: "center",}}>
                        <Text style={{padding:'5%',marginBottom:'10%',

                            justifyContent:"flex-start",

                            alignSelf: 'center',


                            alignItems: "center",marginRight:'auto',
                            color:'#fff',borderColor:'#fff',textAlign: "center",fontSize: 15}}>

                            {item.content} </Text>
                    </View>

                    <View style={{flex:1,justifyContent: "center",alignItems: "center",}}>
                        <Text style={{padding:'5%',borderRadius:45, justifyContent:"flex-start",

                            alignSelf: 'center',

                            textAlignVertical: "center",width:'90%',borderWidth:2,color:'#fff',borderColor:'#fff',textAlign: "center",fontSize: 25}}>View Exercise</Text>
                    </View>
                    </ImageBackground>


                </TouchableOpacity>


        );
    }

    render = () => {


        return (

                <Carousel
                    ref={ (c) => { this._carousel = c; } }
                    data={this.state.videos}
                    renderItem={this._renderItem.bind(this)}
                    onSnapToItem={this.handleSnapToItem.bind(this)}
                    sliderWidth={410}
                    itemWidth={360}
                    itemHeight={470}
                    sliderHeight={470}
                    slideStyle={{backgroundColor:'grey',borderRadius:15}}
                    layout={'tinder'}
                    firstItem={0}
                    layoutCardOffset={`18`}
                    containerCustomStyle={{backgroundColor:'grey'}}
                />

        )
    }
}




const Home1 = createStackNavigator(
    {
        Home: HomePage,
        Weightloss:Weightloss


    },

)
const profile = createStackNavigator(

    {
        profile:HomePage,

    }
)

const RootStack=createBottomTabNavigator(
    {
        Home:Home1,
        Profile:profile
    },
    {
        navigationOptions:{


        }
    }


)




const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}