import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Gifplay from "./gifplay";
import Stretch from "./Stretch";
import GluteBridge from "./GluteBridge";
import Lunge from "./Lunge";
import Bulguriansquat from "./bulguriansquat";
import Bear from "./Bear";
import Legraise from "./Legraise";
import Squat from "./Squat";


let likebu=0


export class Buildyourbutt extends Component{

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
            deafult:0


        }
    }

    ;



    handlenext=()=>{
        let myinterval = setInterval(() => {



                likebu=this.state.deafult
            },

            1000);
    }

    componentDidMount() {
        this.handlenext()

        alert('Consult a physician before beginning any exercise program')



    }







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
                            source={require('../mainImage/buttbuildup.jpg')}/>

                    </View>
                    <View style={{flex:.1,flexDirection:'row',marginTop:'-25%'}}>
                        <View style={{flex:.1,}}>

                        </View>
                        <View style={{flex:.2,margin:15,flexDirection:'column'}}>
                            <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',textAlign: 'center'}}>3.0</Text>
                            <Text style={{fontSize:15,color:'#fff',textAlign: 'center'}}>Mins</Text>

                        </View>
                        <View style={{flex:.1,}}>

                        </View>
                        <View style={{flex:.2,margin:15,flexDirection:'column'}}>
                            <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',textAlign: 'center'}}>34</Text>
                            <Text style={{fontSize:15,color:'#fff',textAlign: 'center'}}>Kcal</Text>

                        </View>
                        <View style={{flex:.1,}}>

                        </View>
                        <View style={{flex:.2,margin:15,flexDirection:'column'}}>
                            <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',textAlign: 'center'}}>7</Text>
                            <Text style={{fontSize:15,color:'#fff',textAlign: 'center'}}>Action</Text>

                        </View>
                        <View style={{flex:.1,}}>

                        </View>

                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,marginTop:'5%'}}>Introduction</Text>

                        <Text style={{margin:'5%'}}>Butt build up is the major portion of our schedule. It imporve the overall posture and make your legs looks matchable and the walking gesture will increase</Text>

                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',width:'100%',}}>

                                <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,}}>Actionlist</Text>
                                <Text style={{margin:'2%',marginLeft: 'auto',flexDirection: 'row', fontSize:20,justifyContent: 'flex-end',right:'5%'}}>7 Actions</Text>
                            </View>








                            <View style={{width:'100%',margin:'5%',}}>






                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Stretch')}
                                    style={{width:'90%',height:100,backgroundColor:'#fff',}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:'100%',}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Stretch</Text>
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
                                    onPress={()=>this.props.navigation.navigate('Glute')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Glutes Bridge</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Lunge')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Lunge</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Bulugrian')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Bulgarian Squat</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Bear')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Bear Plank</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>




                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('sidelying')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Side lying leg lift</Text>
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



                <TouchableHighlight style={{height:60,backgroundColor:'#f94d6d'}} onPress={()=>{this.props.navigation.navigate('Gif');this.setState({deafult:1})}}>
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
        Home:{screen:Buildyourbutt,
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
        Stretch:Stretch,
        Glute:GluteBridge,
        Lunge:Lunge,
        Bulugrian:Bulguriansquat,
        Bear:Bear,
        sidelying:Legraise,
        Squat:Squat









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




export {likebu}
