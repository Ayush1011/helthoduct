import React, { Component } from 'react';
import { View, ScrollView,BackHandler , Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Scissor_Jump from "./Scissor_Jump";
import Kneepushup from "./kneepushup";
import Icon from "react-native-vector-icons/Entypo";
import Endwork from './Endwork'
import {Daily_Routine} from "./Daily_Routine";
import FadingSlides from 'react-native-fading-slides';
import CountDown from 'react-native-countdown-component';
import TimedSlideshow from 'react-native-timed-slideshow';
import Slideshow from 'react-native-slideshow';

import PropTypes from 'prop-types';



export default class Gifplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            timepassed:0,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: require('../gifexercise/knee-push-up-exercise-illustration.gif'),
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: require('../gifexercise/snow.gif'),
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'http://placeimg.com/640/480/any',
                },
            ],
        };
    }



    ShowAlertWithDelay=()=> {
            let myinterval = setInterval(() => {
                    this.setState({timepassed: this.state.timepassed + 1});

                    if (this.state.timepassed===5) {
                        this.setState({timepassed: 0});

                        clearInterval(myinterval)

                        setTimeout(() => {
                            this.ShowAlertWithDelay()
                        }, 5000)

                    }

                },

                1000);

        }
    componentDidMount(): void {
this.ShowAlertWithDelay()
    }

    componentWillMount() {

            this.setState({
                interval: setInterval(() => {
                    this.setState({
                        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1

                    });
                    if (this.state.timepassed ===5) {
                        setTimeout(() => {
                            this.ShowAlertWithDelay()
                        }, 5000)
                    }
                }, 5000)

            });
        }


    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>

                <Slideshow
                scrollEnabled={false}
                dataSource={this.state.dataSource}
                position={this.state.position}
                height={400}
                onPositionChanged={position => this.setState({ position })} />
<View style={{flex:1,flexDirection:'row',marginTop:15}}>
    {this.state.timepassed!==0 ?
        <Text style={{flex:.7,fontSize:25,padding:20}}>Continue Till Time Tit 30 Sec</Text>:

    <Text>NExt excercise will start is 5 sec </Text>}

                <TouchableHighlight style={{width:70,height:100,backgroundColor:'red',marginTop:15}}>

                <Text style={{fontSize:50,textAlign: 'center',alignItems:'center'}}>{this.state.timepassed}</Text>
</TouchableHighlight>
</View>
</View>



        )
    }
}