import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Gifplay from "./gifplay";
import Jumpingjack from "./Jumpingjack";
import Abdiominalcrunches from "./abdimonalcrunches";
import Russiantwist from "./russiantwist";
import Mountainclimber from "./Mountainclimber";
import Alternateheel from "./alternateheel";
import Standinglegraise from "./Standinglegraise";
import Plank from "./Plank";
import Cobarastreatch from "./cobarastreatch";






export class Absbeginner extends Component{

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
                            source={require('../mainImage/abseasy.jpg')}/>

                    </View>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <Text style={{margin:'2%',marginLeft:'5%',fontSize:20}}>Introduction</Text>

                        <Text style={{margin:'5%'}}>Abs are the major part of your body structure you may find that this routine help them to build up in amazing way</Text>

                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',width:'100%',}}>

                                <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,}}>Actionlist</Text>
                                <Text style={{margin:'2%',marginLeft: 'auto',flexDirection: 'row', fontSize:20,justifyContent: 'flex-end',right:'5%'}}>10 Actions</Text>
                            </View>








                            <View style={{width:'100%',margin:'5%',}}>






                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('jumping')}
                                    style={{width:'90%',height:100,backgroundColor:'#fff',}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:'100%',}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Jumping Jack</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('abdiominal')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Abdominal crunches</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('russian')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Russian Twist</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('mountain')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Mountain Climbers</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('alternate')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Alternate heel touches</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('legraise')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Standing leg raise</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>














                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('plank')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Plank</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('cobara')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Cobra stretch</Text>
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
        Home:{screen:Absbeginner ,
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

        Gif:Gifplay,
        jumping:Jumpingjack,
        abdiominal:Abdiominalcrunches,
        russian:Russiantwist,
        mountain:Mountainclimber,
        alternate:Alternateheel,
        legraise:Standinglegraise,
        plank:Plank,
        cobara:Cobarastreatch





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



