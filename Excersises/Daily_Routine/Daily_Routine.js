import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Squat from "./Squat";
import V_crunch from "./V_crunch";
import Glute_bridge from "./Glute_bridge";
import Side_lift from "./Side_lift";
import Jumping_jack from "./jumping_jack";
import Scissor_Jump from "./Scissor_Jump";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import {PhoneAuthTest} from "../../App";
import {Start} from "./start";





export class Daily_Routine extends Component{

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
                            source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-workout-gettyimages-853930556-1540409352.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*'}}/>

                    </View>

<View style={{flex:1,flexDirection:'column'}}>
                    <Text style={{margin:'2%',marginLeft:'5%',fontSize:20}}>Introduction</Text>

                    <Text style={{margin:'5%'}}>lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,”
                        Before & After magazine answered a curious reader, “Its ‘words’  </Text>

                   <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flex:1,flexDirection:'row',width:'100%',}}>

                    <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,}}>Actionlist</Text>
                    <Text style={{margin:'2%',marginLeft: 'auto',flexDirection: 'row', fontSize:20,justifyContent: 'flex-end',right:'5%'}}>6 Actions</Text>
                    </View>








                    <View style={{width:'100%',height:'100%',margin:'5%',}}>

                    <TouchableOpacity style={{width:'90%',height:'35%',backgroundColor:'#fff',}}>
                <View style={{flex:1,flexDirection:'row'}}>
                     <View style={{width:'25%',height:'100%',}}>

                         <Image source={{uri:'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                         style={{width: undefined, height: undefined,flex:1,margin:5}}
                         />



                     </View>
                    <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                        <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Sccior Jump</Text>
                        <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                    <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                            <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                            <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                        </View>
                    </View>
                </View>
                    </TouchableOpacity>






                        <TouchableOpacity style={{width:'90%',height:'35%',backgroundColor:'#fff',marginTop:'5%'}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={{width:'25%',height:'100%',}}>

                                    <Image source={{uri:'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                                           style={{width: undefined, height: undefined,flex:1,margin:5}}
                                    />



                                </View>
                                <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                                    <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Sccior Jump</Text>
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



<TouchableHighlight style={{height:60,backgroundColor:'#f94d6d'}} onPress={()=>{this.props.navigation.navigate('Start')}}>
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
        Home:{screen:Daily_Routine,
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
        Start:Start,
        Scissor_jump:Scissor_Jump,
        Squat:Squat,
        V_crunch:V_crunch,
        Glute_bridge:Glute_bridge,
        Side_leg:Side_lift,
        Jumping_Jack:Jumping_jack,



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




