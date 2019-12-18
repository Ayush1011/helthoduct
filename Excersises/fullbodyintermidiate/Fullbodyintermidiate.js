import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import Inclinepushup from "./Inclinepushup";
import Bentoverdumbbell from "./Bentoverdumbbell";
import Dips from "./Dips";
import Squat from "./Squat";
import BridgeBodyweight from "./Bridge Bodyweight";
import Bycyclecrunch from "./Bycyclecrunch";
import Dumbbellbicepscrul from "./dumbbellbicepscrul";
import Gifplay from "./gifplay";



export class Fullbodyintermidiate extends Component{

    static navigationOptions = {
        title: 'HELTHODUCT',
        header:null,
        headerStyle: { Color: 'red',
            backgroundColor: '#fff',
            borderBottomColor: '#fff',
            headerMode:null



        },
        headerTitleStyle: { color: '#fff',fontFamily:'Roboto',right:0,
            marginLeft:'auto',


            fontSize:25},
    }
    constructor()
    {
        super()
        this.state={
            open:false,
            offset:0,


        }
    }

    ;







    render(){
        return(



            <View style={{width:'100%',height:'100%',backgroundColor:'#f1f1f1'}}>


                <ScrollView>




                    <View style={{width:'100%',
                        justifyContent:"flex-start",

                        alignSelf: 'center',

                        height:270,}}>

                        <Image
                            style={{width:'100%',height:'100%'}}
                            source={{uri:'https://www.thegrowthop.com/wp-content/uploads/2019/04/1a_GettyImages-1007730100-e1555440810469.jpg'}}/>

                    </View>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <Text style={{margin:'2%',marginLeft:'5%',fontSize:20}}>Introduction</Text>

                        <Text style={{margin:'5%'}}>This workout is a progression from the beginner/intermediate total body workout. It includes more advanced exercises and incorporates a barbell into many of the exercises. If you don't have a barbell you can continue to use dumbbells.</Text>

                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',width:'100%',}}>

                                <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,}}>Actionlist</Text>
                                <Text style={{margin:'2%',marginLeft: 'auto',flexDirection: 'row', fontSize:20,justifyContent: 'flex-end',right:'5%'}}>7 Actions</Text>
                            </View>








                            <View style={{width:'100%',margin:'5%',}}>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('incline')}
                                    style={{width:'90%',height:100,backgroundColor:'#fff',}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Incline pushup</Text>
                                            <View style={{flex:1,flexDirection:'row',height:100}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Bentdumbbell')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Bent over dumbbell</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('bicepscrul')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Dumbbell biceps crul</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Dips')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Dips</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Squat')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Squat</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('bridge')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Bridge Bodyweight</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Bycycle')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Bicycle Crunch</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>














                            </View>


                        </View>
                    </View>
                </ScrollView>



                <TouchableHighlight style={{height:60,backgroundColor:'#f94d6d'}} onPress={()=>{this.props.navigation.navigate('Gif')}}>
                    <Text style={{flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',alignSelf: "center",top:10,
                        fontSize:25}}>START</Text>

                </TouchableHighlight>



















            </View>















        )
    }

}















const profile2 = createStackNavigator(

    {
        Home:{screen:Fullbodyintermidiate,
            headerMode: 'none',
            headerTransparent: true,

            navigationOptions: {
                header:null,
                headerStyle: { Color: 'red',
                    backgroundColor: '#fff',
                    borderBottomColor: '#fff',
                    headerMode:null



                },
            },

        },
        incline:Inclinepushup,
        Bentdumbbell:Bentoverdumbbell,
        Dips:Dips,
        Squat:Squat,
        bridge:BridgeBodyweight,
        Bycycle:Bycyclecrunch,
        bicepscrul:Dumbbellbicepscrul,
        Gif:Gifplay



    },

    {
        headerMode: 'none',
        headerTransparent: true,



        initialRouteName:'Home'
    }

)

const AppContainers1 = createAppContainer(profile2);

export default class App extends React.Component {
    render() {
        return <AppContainers1 />;
    }
}




