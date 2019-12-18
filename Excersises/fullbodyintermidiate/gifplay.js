import React, { Component } from 'react';
import { View, ScrollView,BackHandler , Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from "react-native-vector-icons/Feather";

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
            timepassed:0,
            total:7,
            toShow:false,
            dataSource: [
                {
                    title: 'KNEE PUSH UP',
                    caption: 'Its just the starting',
                    url: require('../gifs/Incline_pushups.gif'),
                },{
                    title: 'Dumbbell sideraise',
                    caption: 'Warming up',
                    url: require('../gifs/BentoverDumbell.gif'),
                },{
                    title: 'Reverse Snow Angel',
                    caption: 'Working up',
                    url: require('../gifs/Dumbellbicepscurl.gif'),
                },{
                    title: 'Diamond Knee Pushup',
                    caption: 'Keep it up',
                    url: require('../gifs/Dips.gif'),
                },{
                    title: 'Dumbbell Biceps Crul',
                    caption: 'In progress',
                    url: require('../gifs/Squatjump.gif'),
                },{
                    title: 'Standing Leg Raise',
                    caption: 'Almost completed',
                    url: require('../gifs/GluteBridge.gif'),
                },{
                    title: 'Crunch',
                    caption: 'Last One keep it up',
                    url: require('../gifs/Bicyclecrunch.gif'),
                },
            ],
        };
    }



    ShowAlertWithDelay=()=> {
            let myinterval = setInterval(() => {

                    this.setState({timepassed: this.state.timepassed + 1,});

                    if (this.state.timepassed===30) {
                        this.setState({timepassed: 0,position:this.state.position+1});
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

        setTimeout(() => {this.ShowAlertWithDelay()}, 10000)

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
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#222222'}}>
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

                containerStyle={{color:'#111',margin:5,borderRadius:15,}}
                 />
</View>
                 <ScrollView>
<View style={{flex:1,flexDirection:'row',marginTop:5,margin:10,borderRadius:15}}>


        <Text style={{flex:.7,fontSize:20,padding:20,fontWeight: 'bold',color:'#fff',borderRadius:15,}}>Continue Till Time Hit 30 Sec</Text>


                <TouchableHighlight style={{width:100,height:100,backgroundColor:'#2A2A2A',borderRadius:100/2,marginTop:7}}>

                    <Text style={{fontSize:50,textAlign: 'center',marginTop:'15%',alignItems:'center',color:'#fff'}}>{ this.state.toShow==false ? this.state.timepassed : <Text>0</Text>}</Text>



</TouchableHighlight>
</View>
                <View style={{flexDirection:'row',backgroundColor:'#2A2A2A',justifyContent:'center',alignItems:'center',alignSelf:'center',height:50,margin:'4%',borderRadius:15,}}>
    <TouchableOpacity style={{margin:15}} onPress={()=>this.onBack()}>
        <Icon name="chevrons-left" size={30} color="#787878" style={{right:15,justifyContent:'center',alignItems:'center',bottom:5}}/>

    </TouchableOpacity>
                    <Text style={{textAlign:'center',fontSize:20,alignItems:'center',bottom:5,color:'#fff'}}>{this.state.position+1}/{this.state.total}</Text>
    <TouchableOpacity style={{margin:15}} onPress={()=>this.onForward()}>
        <Icon name="chevrons-right" size={30} color="#787878" style={{left:15,bottom:5}}/>
    </TouchableOpacity>

                </View>

                {this.state.toShow==true?
                    <TouchableOpacity style={{backgroundColor:'#2A2A2A',justifyContent:'center',alignItems:'center',alignSelf:'center',height:50,margin:'4%',borderRadius:15,width:100}}  onPress={()=>this.setState({toShow:false,timepassed:0})}>
                        <Text style={{fontSize:20,bottom:5,color:'#fff'}}>start</Text>
                    </TouchableOpacity>:null
                }
                 </ScrollView>
</View>



        )
    }
}