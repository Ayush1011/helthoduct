import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Incline_pushup from "./Incline_pushup";
import Wide_pushup from "./Wide_pushup";
import Onearm_pushup from "./Onearm_pushup";
import Knee_pushup from "./Knee_pushup";
import Triceps_streach from "./Triceps_streach";
import Cheast_Streach from "./cheast_Streach";
import Icon from "react-native-vector-icons/FontAwesome5";




export class Chest_builder extends Component{
    static navigationOptions = {
        header: null,
        headerVisible: false,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: 'red'
        },

    }
    constructor()
    {
        super()
        this.state={
            open:false,
            offset:0

        }
    }

    ;

    render(){
        return(



            <View style={{width:'100%',height:'100%',backgroundColor:'#111111'}}>





                <ScrollView>

                    <View style={{width:'100%',
                        justifyContent:"flex-start",

                        alignSelf: 'center',

                        height:200,}}>

                        <Image
                            style={{width:'100%',height:'100%'}}
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/chestbuilder.jpg?alt=media&token=e7de863c-9d42-45b7-9bf2-3465a6fbeb2c'}}/>

                    </View>


                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:'-5%',

                        alignSelf: 'center',

                        height:110,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('Incline_pushup')}>



                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="xing" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Incline Pushup</Text>


                            </View>

                        </ImageBackground>



                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Wide_pushup')}

                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="think-peaks" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Wide Pushup</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>








                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('One_Arm')}
                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="signature" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>One Arm</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>











                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Knee_pushup')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="skyatlas" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Knee Pushup</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Triceps')}
                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="atlassian" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Triceps</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>



                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,marginBottom:15}}
                                      onPress={()=>this.props.navigation.navigate('Chest_stretch')}
                    >


                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="renren" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Chest Stretch</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>






                </ScrollView>
























            </View>















        )
    }

}















const profile2 = createStackNavigator(

    {
        Home:Chest_builder,
       Incline_pushup:Incline_pushup,
        Wide_pushup:Wide_pushup,
        One_Arm:Onearm_pushup,
        Knee_pushup:Knee_pushup,
        Triceps:Triceps_streach,
        Chest_stretch:Cheast_Streach


    },

    {
        headerMode:'none',
        navigationOptions: {
            header:null
        },

        initialRouteName:'Home'
    }


)

const AppContainers1 = createAppContainer(profile2);

export default class App extends React.Component {
    render() {
        return <AppContainers1 />;
    }
}




