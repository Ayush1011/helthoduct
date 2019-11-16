import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Squat_Cushion from "./Squat_Cushion";
import Lunge from "./Lunge";
import Bear_plank from "./Bear_plank";
import HalfSquat from "./HalfSquat";
import Squat from "./Squat";
import Side_lift from "./Side_lift";
import Side_lying_kick from "../Butt_Buildup/Side_lying_kick";
import Stretch from "./Stretch";
import Icon from "react-native-vector-icons/FontAwesome5";





export class Slimmer_legs extends Component{
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
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/legs.jpg?alt=media&token=268a93d4-ba63-4930-8e87-b29cee490369'}}/>

                    </View>



                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:'-5%',

                        alignSelf: 'center',

                        height:100,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('Squat_Cushion')}>



                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="angle-double-down" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Squat Cushion</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:25,

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

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('HalfSquat')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="angle-down" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>HalfSquat</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
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
                                      onPress={()=>this.props.navigation.navigate('Side_leg_Left')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="bacon" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Side Leg Left</Text>


                            </View>

                        </ImageBackground>
                    </TouchableOpacity>




                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}
                                      onPress={()=>this.props.navigation.navigate('Side_Kick')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="skating" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Side Kick</Text>


                            </View>

                        </ImageBackground>

                    </TouchableOpacity>








                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,marginBottom:15}}
                                      onPress={()=>this.props.navigation.navigate('Stretch')}
                    >
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



                </ScrollView>
























            </View>















        )
    }

}















const profile2 = createStackNavigator(

    {
        Home:Slimmer_legs,
       Squat_Cushion:Squat_Cushion,
        Lunge:Lunge,
        Bear_plank:Bear_plank,
        HalfSquat:HalfSquat,
        Squat:Squat,
        Side_leg_Left:Side_lift,
        Side_Kick:Side_lying_kick,
        Stretch:Stretch


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




