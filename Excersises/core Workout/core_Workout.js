import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Abs_Stretch from "./Abs_Stretch";
import Bird_Dog from "./Bird_Dog";
import Glute_Bridge_Hold from "./Glute_Bridge_Hold";
import Plank from "./Plank";
import Plank_K_E from "./Plank_K_E";
import Russian_Twist from "./Russian_Twist";
import Torso_stretch from "./Torso_stretch";
import V_crunch from "./V_crunch";
import Icon from "react-native-vector-icons/FontAwesome5";





export class Core_Workout extends Component{
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
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/coreworkout.jpg?alt=media&token=f97a8f20-f220-487a-a30b-2bf70aa79952'}}/>

                    </View>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:'-5%',

                        alignSelf: 'center',

                        height:100,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('Bird_Dog')}>



                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="dragon" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Bird Dog</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",

                        alignSelf: 'center',marginTop:25,

                        height:125,borderRadius:25,}}
                                      onPress={()=>this.props.navigation.navigate('Glute_Bridge_Hold')}

                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="anchor" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Glute Bridge Hold</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>






                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('V_crunch')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="angle-down" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>V crunch</Text>


                            </View>

                        </ImageBackground>
                    </TouchableOpacity>







                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Plank')}
                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="cloudsmith" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Plank</Text>


                            </View>

                        </ImageBackground>
                    </TouchableOpacity>







                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Plank_K_E')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="mandalorian" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Plank Knee and Elbow</Text>


                            </View>

                        </ImageBackground>



                    </TouchableOpacity>



                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Abs_Stretch')}
                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="deviantart" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Abs Stretch</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>


                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Russian_Twist')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="opencart" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Russian Twist</Text>

                            </View>

                        </ImageBackground>
                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,marginBottom:15}}
                                      onPress={()=>this.props.navigation.navigate('Torso_stretch')}
                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="vaadin" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Toso stretch</Text>


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
        Home:Core_Workout,
        Abs_Stretch:Abs_Stretch,
        Bird_Dog:Bird_Dog,
        Glute_Bridge_Hold:Glute_Bridge_Hold,
        Plank:Plank,
        Plank_K_E:Plank_K_E,
        Russian_Twist:Russian_Twist,
        Torso_stretch:Torso_stretch,
        V_crunch:V_crunch,


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




