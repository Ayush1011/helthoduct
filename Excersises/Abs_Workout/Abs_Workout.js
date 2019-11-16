import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Singlelegsit_up from "./singleleg sit_up";
import Knee_toucher from "./Knee_toucher";
import V_crunch from "./V_crunch";
import Russian_Twist from "./Russian_Twist";
import Plank from "./Plank";
import Abs_Streach from "./Abs_Streach";
import Icon from "react-native-vector-icons/FontAwesome5";





export class Abs_Workout extends Component{
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
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/absbuild.jpg?alt=media&token=e34bc31b-a24a-4ecd-9437-bd82b3f0abb7'}}/>

                    </View>



                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:'-5%',

                        alignSelf: 'center',

                        height:110,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('Singleleg')}>



                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="xing" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Singleleg</Text>


                            </View>

                        </ImageBackground>


                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'90%',
                        justifyContent:"flex-start",marginTop:15,

                        alignSelf: 'center',borderRadius:25,

                        height:125,}}
                                      onPress={()=>this.props.navigation.navigate('Knee_toucher')}

                    >
                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="sort-down" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Knee Toucher</Text>


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
                                      onPress={()=>this.props.navigation.navigate('Russian_twist')}
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

                        height:125,}}
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

                        height:125,marginBottom:15}}
                                      onPress={()=>this.props.navigation.navigate('Abs_Stretch')}
                    >

                        <ImageBackground source={require('../mainImage/12.jpg')}
                                         style={{width: undefined,
                                             height: undefined,
                                             flex:1,borderRadius:25}}
                                         imageStyle={{ borderRadius: 25}}
                        >


                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <Icon name="servicestack" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Abs Stretch</Text>


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
        Home:Abs_Workout,
        Singleleg:Singlelegsit_up,
        Knee_toucher:Knee_toucher,
        V_crunch:V_crunch,
        Russian_twist:Russian_Twist,
        Plank:Plank,
        Abs_Stretch:Abs_Streach


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




