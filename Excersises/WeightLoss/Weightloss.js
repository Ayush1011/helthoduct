import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";
import Scissor_Jump from "./Scissor_Jump";
import Plank from "./Plank";
import CalfStreach from "./CalfStreach";
import Hop from "./Hop";
import HalfSquat from "./HalfSquat";
import Burpee from "./Burpee";
import Jumping_jack from "./jumping_jack";
import Icon from "react-native-vector-icons/FontAwesome5";





export  class Weightloss extends Component{
    static navigationOptions = {
        header: null,
        headerVisible: false,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: 'red'
        },

    };
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
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/weightloss.jpg?alt=media&token=810c6b93-c9b0-484b-8181-b560293a8ef7'}}/>

</View>


                        <TouchableOpacity style={{width:'90%',
                            justifyContent:"flex-start",marginTop:'-5%',

                            alignSelf: 'center',

                            height:110,borderRadius:25,marginBottom:45}}  onPress={()=>this.props.navigation.navigate('scissor')}>



                            <ImageBackground source={require('../mainImage/12.jpg')}
                                             style={{width: undefined,
                                                 height: undefined,
                                                 flex:1,borderRadius:25}}
                                             imageStyle={{ borderRadius: 25}}
                            >


                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <Icon name="child" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                    <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Scissor</Text>


                                </View>

                            </ImageBackground>

                        </TouchableOpacity>

                        <TouchableOpacity style={{width:'90%',
                            justifyContent:"flex-start",

                            alignSelf: 'center',marginTop:15,

                            height:125,borderRadius:25,}}
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
                            justifyContent:"flex-start",

                            alignSelf: 'center',marginTop:15,

                            height:125,borderRadius:25,}}
                                          onPress={()=>this.props.navigation.navigate('Hop')}
                        >
                            <ImageBackground source={require('../mainImage/12.jpg')}
                                             style={{width: undefined,
                                                 height: undefined,
                                                 flex:1,borderRadius:25}}
                                             imageStyle={{ borderRadius: 25}}
                            >


                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <Icon name="angle-up" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                    <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Hop</Text>


                                </View>

                            </ImageBackground>

                        </TouchableOpacity>





                        <TouchableOpacity style={{width:'90%',
                            justifyContent:"flex-start",

                            alignSelf: 'center',marginTop:15,

                            height:150,borderRadius:25,}}
                                          onPress={()=>this.props.navigation.navigate('Burpee')}
                        >
                            <ImageBackground source={require('../mainImage/12.jpg')}
                                             style={{width: undefined,
                                                 height: undefined,
                                                 flex:1,borderRadius:25}}
                                             imageStyle={{ borderRadius: 25}}
                            >


                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <Icon name="autoprefixer" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                    <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Burpee</Text>


                                </View>

                            </ImageBackground>

                        </TouchableOpacity>





                        <TouchableOpacity style={{width:'90%',
                            justifyContent:"flex-start",

                            alignSelf: 'center',marginTop:15,

                            height:125,borderRadius:25,}}
                                          onPress={()=>this.props.navigation.navigate('Jumping_jack')}
                        >
                            <ImageBackground source={require('../mainImage/12.jpg')}
                                             style={{width: undefined,
                                                 height: undefined,
                                                 flex:1,borderRadius:25}}
                                             imageStyle={{ borderRadius: 25}}
                            >


                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <Icon name="angle-double-up" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                    <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>Jumping jack</Text>


                                </View>

                            </ImageBackground>

                        </TouchableOpacity>



                        <TouchableOpacity style={{width:'90%',
                            justifyContent:"flex-start",
                            marginTop:15,
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

                            height:150,marginBottom:15}}
                                          onPress={()=>this.props.navigation.navigate('CalfStreach')}
                        >
                            <ImageBackground source={require('../mainImage/12.jpg')}
                                             style={{width: undefined,
                                                 height: undefined,
                                                 flex:1,borderRadius:25}}
                                             imageStyle={{ borderRadius: 25}}
                            >


                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <Icon name="confluence" size={30} color="#000" style={{marginLeft:40,flex:.35}}/>

                                    <Text style={{fontSize:20,color:'#000',flex:.5,marginTop:-15,marginLeft:-50,textDecorationLine: 'underline',}}>CalfStreach</Text>


                                </View>

                            </ImageBackground>

                        </TouchableOpacity>





                    </ScrollView>
























                </View>















        )
    }

}















const profile1 = createStackNavigator(

    {
        Home:Weightloss,
        scissor:Scissor_Jump,
        Plank:Plank,
        CalfStreach:CalfStreach,
        Hop:Hop,
        Jumping_jack:Jumping_jack,
        HalfSquat:HalfSquat,
        Burpee:Burpee,

    },

    {
        headerMode:'none',
        navigationOptions: {
            headerVisible: false,
            header: null,
        },


    }

)

const AppContainers = createAppContainer(profile1);

export default class App extends React.Component {
    render() {
        return <AppContainers />;
    }
}




