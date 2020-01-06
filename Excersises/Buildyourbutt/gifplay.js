import React, { Component } from 'react';
import { View, ScrollView,BackHandler , Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from "react-native-vector-icons/AntDesign";

import FadingSlides from 'react-native-fading-slides';
import CountDown from 'react-native-countdown-component';
import TimedSlideshow from 'react-native-timed-slideshow';
import Slideshow from 'react-native-slideshow';

import PropTypes from 'prop-types';



export default class Gifplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            interval: null,
            timepassed:30,
            total:7,
            change:false,
            count:5,
            toShow:false,
            dataSource: [
                {
                    title: 'Stretch',
                    caption: 'Its just the starting',
                    url: require('../gifs/stretch.gif'),
                },{
                    title: 'GluteBridge',
                    caption: 'Warming up',
                    url: require('../gifs/GluteBridge.gif'),
                },{
                    title: 'Lunge',
                    caption: 'Working up',
                    url: require('../gifs/Lunge.gif'),
                },{
                    title: 'Bulgarian Squat',
                    caption: 'Keep it up',
                    url: require('../gifs/bulgurian.gif'),
                },{
                    title: 'Bear Plank',
                    caption: 'In progress',
                    url: require('../gifs/bear.gif'),
                },{
                    title: 'Side leg lift',
                    caption: 'Last One keep it up',
                    url: require('../gifs/legraise.gif'),
                },
                {
                    title: 'Squat',
                    caption: 'Last One keep it up',
                    url: require('../gifs/Squatjump.gif'),
                },

            ],
        };
    }

    showDelay=()=>{
        let myinterval1 = setInterval(() => {

                this.setState({count:this.state.count-1})
                if(this.state.count===0){
                    this.setState({change:true})
                }
            },

            1000);
    }

    ShowAlertWithDelay=()=> {
            let myinterval = setInterval(() => {

                    this.setState({timepassed: this.state.timepassed - 1,});

                    if (this.state.timepassed===0) {
                        this.setState({timepassed: 30,position:this.state.position+1});
                        clearInterval(myinterval)

                        setTimeout(() => {this.ShowAlertWithDelay()}, 5000)


                    }
                    if(this.state.position>=this.state.total){
                        this.setState({position:this.state.total-1})
                    }

                },

                1000);

        }



    componentWillMount(){

        setTimeout(() => {this.ShowAlertWithDelay()}, 5000)
        this.showDelay()

    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    onForward=()=>{
        this.setState({position:this.state.position+1,toShow:true})
        if(this.state.position>=this.state.total){
            this.setState({position:this.state.total-1})
        }

    }
    onBack=()=>{
        this.setState({position:this.state.position-1,toShow:true})
        if(this.state.position<=0){
            this.setState({position:1})
        }
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#363636'}}>
                <View>
                    <Slideshow
                        style={{color:'#111'}}
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        height={350}

                        scrollEnabled={false}
                        arrowSize={0}
                        indicatorSelectedColor={'black'}
                        indicatorSize={6}

                        containerStyle={{color:'#111',borderRadius:15,margin:5}}
                    />
                </View>
                <ScrollView>


                    <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'white',margin:15}}>Butt Buildup</Text>
                    <View style={{backgroundColor:'grey',width:'90%',height:1,alignSelf:'center'}}>

                    </View>


                    <View style={{flex:1,flexDirection:'row',marginTop:5,margin:10,borderRadius:15}}>



                        {
                            this.state.change===true
                                ?
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Text style={{flex:.8,color:'white',fontSize:25,alignSelf:'center'}}>
                                        Continue Till Timer hits 0
                                    </Text>
                                    <TouchableHighlight style={{width:70,height:70,backgroundColor:'#2A2A2A',borderRadius:70/2,marginTop:7}}>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                                            <Text style={{fontSize:20,textAlign: 'center',justifyContent:'center',alignItems:'center',color:'#fff'}}>{ this.state.toShow===false ? this.state.timepassed : <Text>0</Text>}</Text>

                                        </View>

                                    </TouchableHighlight>
                                </View>

                                :
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Text style={{flex:.8,color:'white',fontSize:25,alignSelf:'center'}}>
                                        Prepare Yourself
                                    </Text>
                                    <TouchableHighlight style={{width:70,height:70,backgroundColor:'#2A2A2A',borderRadius:70/2,marginTop:7,}}>

                                        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>

                                            <Text style={{fontSize:20,textAlign: 'center',alignSelf:'center',justifyContent:'center',alignItems:'center',color:'#fff'}}>{this.state.count}</Text>

                                        </View>

                                    </TouchableHighlight>
                                </View>

                        }




                    </View>
                    <View style={{flex:1,flexDirection:'row',backgroundColor:'#313131',justifyContent:'center',alignItems:'center',alignSelf:'center',height:60,margin:'4%',borderRadius:5,width:200}}>
                        <TouchableOpacity style={{margin:15,flex:.3,alignSelf:'center',justifyContent:'center',alignItems:'center',}} onPress={()=>this.onBack()}>
                            <Icon name="stepbackward" size={27} color="#787878" style={{bottom:5}}/>

                        </TouchableOpacity>
                        <Text style={{flex:.25,textAlign:'center',fontSize:20,alignItems:'center',bottom:5,color:'#fff',fontWeight:'bold'}}>{this.state.position+1}/{this.state.total}</Text>
                        <TouchableOpacity style={{margin:15,flex:.3,alignSelf:'center',justifyContent:'center',alignItems:'center',}} onPress={()=>this.onForward()}>
                            <Icon name="stepforward" size={27} color="#787878" style={{bottom:5}}/>
                        </TouchableOpacity>

                    </View>

                    {this.state.toShow==true?
                        <TouchableOpacity style={{backgroundColor:'#313131',justifyContent:'center',alignItems:'center',alignSelf:'center',height:50,margin:'4%',borderRadius:5,width:100}}  onPress={()=>this.setState({toShow:false,timepassed:30})}>
                            <Text style={{fontSize:20,bottom:5,color:'#fff'}}>Start</Text>
                        </TouchableOpacity>:null
                    }
                </ScrollView>
            </View>



        )
    }
}