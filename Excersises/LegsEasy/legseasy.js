import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomePage} from "../../HomePage";
import Modal from "react-native-simple-modal/index";

import Icon from "react-native-vector-icons/SimpleLineIcons";

import Gifplay from "./gifplay";
import Sidehop from "./Sidehop";
import Sidelyingleglift from "./sidelyingleglift";
import Lunge from "./Lunge";
import Donkeykicks from "./Donkeykicks";
import Quadstrtch from "./Quadstrtch";
import Wallcalf from "./Wallcalf";
import Calfraise from "./calfraise";
import Squat from "./Squat";
import {likefi} from "../fullbodyintermidiate/Fullbodyintermidiate";


let likele=0


export class Legseasy extends Component{

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



                likele=this.state.deafult
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
                            source={require('../mainImage/legseasy.jpg')}/>

                    </View>
                    <View style={{flex:.1,flexDirection:'row',marginTop:'-25%'}}>
                        <View style={{flex:.1,}}>

                        </View>
                        <View style={{flex:.2,margin:15,flexDirection:'column'}}>
                            <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',textAlign: 'center'}}>6.0</Text>
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
                            <Text style={{fontSize:25,fontWeight: 'bold',color:'#fff',textAlign: 'center'}}>12</Text>
                            <Text style={{fontSize:15,color:'#fff',textAlign: 'center'}}>Action</Text>

                        </View>
                        <View style={{flex:.1,}}>

                        </View>

                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,marginTop:'5%'}}>Introduction</Text>

                        <Text style={{margin:'5%'}}>Doing leg exercises at home is probably a lot easier than you realize. You don't need a leg press machine or a stair climber or a squat bar to fire up those lower-body muscles. All you need is your bodyweight, maybe a chair, and the motivation to put some burn
                            in your quads, hamstrings, glutes, calves, and inner thighs.</Text>

                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',width:'100%',}}>

                                <Text style={{margin:'2%',marginLeft:'5%',fontSize:20,}}>Actionlist</Text>
                                <Text style={{margin:'2%',marginLeft: 'auto',flexDirection: 'row', fontSize:20,justifyContent: 'flex-end',right:'5%'}}>12 Actions</Text>
                            </View>








                            <View style={{width:'100%',margin:'5%',}}>






                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Sidehop')}
                                    style={{width:'90%',height:100,backgroundColor:'#fff',}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:'100%',}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:'100%'}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Side Hop</Text>
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
                                    onPress={()=>this.props.navigation.navigate('Sidelying')}

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
                                    onPress={()=>this.props.navigation.navigate('Donkey')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Donkey Kicks</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Quad')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Quad stretch</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>














                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Wallcalf')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Wall Calf Raise</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Calf')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Calf Raise</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>





                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Dumbellextention')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Dumbbell Triceps extension</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('Dumbbellbicepscrul')}

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
                                    onPress={()=>this.props.navigation.navigate('Crunch')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Crunch</Text>
                                            <View style={{flex:1,flexDirection:'row',height:'100%'}}>
                                                <Icon name="clock" size={20} color="#787878" style={{marginLeft:'5%',}}/>
                                                <Text style={{fontSize:18,color:'#787878'}}> 30 SEC</Text>
                                                <Icon name="arrow-right" size={20} color="#787878" style={{marginLeft:'auto',right:15,bottom:15}}/>

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>




                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('MountainClimber')}

                                    style={{width:'90%',height:100,backgroundColor:'#fff',marginTop:'5%'}}>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{width:'25%',height:100,}}>

                                            <Image source={require('../mainImage/helto.jpg')}
                                                   style={{width: undefined, height: undefined,flex:1,margin:5}}
                                            />



                                        </View>
                                        <View style={{flex:1,flexDirection:'column',height:100}}>
                                            <Text style={{margin:'5%',fontSize:18,color:'#787878'}} >Mountain Climber</Text>
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
        Home:{screen:Legseasy,
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
        Sidehop:Sidehop,
        Sidelying:Sidelyingleglift,
        Squat:Squat,
        Lunge:Lunge,
        Donkey:Donkeykicks,
        Quad:Quadstrtch,
        Wallcalf:Wallcalf,
        Calf:Calfraise







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



export {likele}

