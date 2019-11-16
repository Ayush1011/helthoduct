import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";

import Modal from "react-native-simple-modal/index";
import Stretch from "./Stretch";
import Glute_Bridge_Hold from "./Glute_Bridge_Hold";
import Lunge from "./Lunge";
import Bulgarian_squat from "./Bulgarian_squat";
import Glute_bridge from "./Glute_bridge";
import Bear_plank from "./Bear_plank";
import Side_lying_kick from "./Side_lying_kick";
import Squat from "./Squat";
import Bending_stretch from "./Bending_stretch";
import Icon from "react-native-vector-icons/FontAwesome5";





export class Butt_buildup extends Component{
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
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/buttt.jpg?alt=media&token=f82c2066-4229-49d6-b6c9-eea0d939e89f'}}/>

                    </View>



                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:'-5%',

                        alignSelf: 'center',

                        height:100,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('Stretch')}>




                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="scribd" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Stretch</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:25,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Glute_bridge')}

                    >


                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="anchor" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Glute Bridge</Text>


                            </View>

                        </ImageBackground>
                    </TouchableOpacity>








                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Lunge')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="pray" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Lunge</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>











                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Bulgarian_squat')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="ethereum" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Bulgarian Squat</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>







                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Bear_plank')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="schlix" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Bear Plank</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Side_lying')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="scribd" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Side Lying</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Squat')}
                    >


                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="skating" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Squat</Text>


                            </View>

                        </ImageBackground>
                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Bending_Stretch')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="pied-piper-hat" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Bending Stretch</Text>


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
        Home:Butt_buildup,
        Stretch:Stretch,
        Glute_bridge:Glute_Bridge_Hold,
        Lunge:Lunge,
        Bulgarian_squat:Bulgarian_squat,
        Glute:Glute_bridge,
        Bear_plank:Bear_plank,
        Side_lying:Side_lying_kick,
        Squat:Squat,
        Bending_Stretch:Bending_stretch

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




