import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';




export default class Give extends Component{
    static navigationOptions = {



        headerStyle: {
            backgroundColor: '#E592D9'
        },

    }
    constructor()
    {
        super()
        this.state={
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '30',
            startDisable: false,
            resetDisable:false,
            stopDisable:false
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    onButtonStart = () => {

        let timer = setInterval(() => {

            var num = (Number(this.state.seconds_Counter) - 1).toString(),
                count = this.state.minutes_Counter;

            if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) - 1).toString();
                num = '00';
            }

            this.setState({
                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num
            });
            if(Number(this.state.seconds_Counter<=0)){
                clearInterval(this.state.timer);

                this.setState({

                    timer: null,
                    minutes_Counter: '00',
                    seconds_Counter: '00',
                    stopDisable:true,
                    resetDisable:false,
                    startDisable : true




                });

            }


        }, 1000);
        this.setState({ timer });


        this.setState({startDisable : true})
    }


    onButtonStop = () => {
        clearInterval(this.state.timer);
        this.setState({startDisable : false,})
    }


    onButtonClear = () => {
        this.setState({
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '30',
            stopDisable:false,startDisable:false
        });
    }

    render(){
        return(

            <View style={{backgroundColor: '#3C3C3C',height:'100%',}}>
                <Image
                    source={require('../gifs/Squats.gif')}
                    style={{width: '90%',height:'40%',padding:15,margin:'3%',justifyContent:"center",alignItems:'center',alignSelf:"center",overlayColor: '#3C3C3C',borderRadius:15}}
                />

                <View style={{backgroundColor: '#616363',margin:15,borderRadius:15,marginTop:0,padding:5}}>
                    <ScrollView>
                        <Text style={{textAlign: 'left',margin:15,marginLeft:'11%',color:'#fff',fontSize:18}}>Action List (00.30-01:00)</Text>

                        <Text style={{textAlign: 'left',marginLeft:'12%',marginBottom:5,color:'#fff'}}>{'\u2B24'} Stand with your legs wide apart matching your shoulders</Text>
                        <Text style={{textAlign: 'left',marginLeft:'12%',marginBottom:5,color:'#fff'}}>{'\u2B24'} Keep your hands stretched out in the front or if you like, fold them or place them on the hips.</Text>
                        <Text style={{textAlign: 'left',marginLeft:'12%',marginBottom:5,color:'#fff'}}>{'\u2B24'} Push your butt out, back flat and go down till you make a 90 degree angle.</Text>
                        <Text style={{textAlign: 'left',marginLeft:'12%',marginBottom:5,color:'#fff'}}>{'\u2B24'} Make sure your knees don't go over your toes.</Text>
                        <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>

                        <View style={{flex:1,flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={this.onButtonStart}
                                activeOpacity={0.6}
                                style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]}
                                disabled={this.state.startDisable} >

                                <Text style={styles.buttonText}>START</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.onButtonStop}
                                activeOpacity={0.6}
                                style={[styles.button, { backgroundColor: this.state.stopDisable ? '#B0BEC5' : '#FF6F00' }]}
                                disabled={this.state.stopDisable}>

                                <Text style={styles.buttonText}>STOP</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.onButtonClear}
                                activeOpacity={0.6}
                                style={[styles.button, { backgroundColor: this.state.resetDisable ? '#B0BEC5' : '#FF6F00' }]}
                                disabled={this.state.resetDisable} >

                                <Text style={styles.buttonText}> RESET </Text>

                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '20%',
        paddingTop:8,
        paddingBottom:8,
        borderRadius:7,
        margin:5
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20
    },
    counterText:{

        fontSize: 25,
        color: '#fff',
        right:5,
        marginLeft:'auto'
    }
});