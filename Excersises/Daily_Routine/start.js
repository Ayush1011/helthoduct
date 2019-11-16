import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Scissor_Jump from "./Scissor_Jump";
import {Daily_Routine} from "./Daily_Routine";
import Squat from "../Butt_Buildup/Squat";
import Icon from "react-native-vector-icons/Entypo";
import Give from "./Givingup";


export class Start extends Component {

    constructor() {
        super()
        this.state = {

            timepassed:0,
            step:0,
            istrue:false,
            timer:5
        }
    }

    ShowAlertWithDelay=()=>{

        let myinterval=setInterval(() => {
            this.setState({timepassed:this.state.timepassed+1});
            if(this.state.timepassed>5){
                this.setState({timepassed:0,step:this.state.step+1,})
                clearInterval(myinterval)

                setTimeout(() => {this.ShowAlertWithDelay()}, 5000)
                if(this.state.step===0){
                    this.props.navigation.navigate('Scissor_jump')
                }



            }
            if(this.state.step===1){
                this.props.navigation.navigate('Squat')
            }
            else if(this.state.step===2){
                this.props.navigation.navigate('Scissor_jump')
            }
        }, 1000);




    }



    changestate=()=>{

        let myinterval=setInterval(() => {
            this.setState({timer: this.state.timer - 1



            });


            if(this.state.timer<=0){
                clearInterval(myinterval)

                this.setState({timer:0})
            }
        },1000)
        this.setState({
            istrue: !this.state.istrue,

        })

    }



    render() {

        return (
<View style={{flex:1,flexDirection:'column'}}>


    <View style={{flex:1,flexDirection:'column',height:'100%',margin:5}}>
        <View style={{flex:1,margin:'5%',flexDirection:'row',}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Gives')}
                style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,borderRadius:15}}>


            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,marginTop:'16%',borderRadius:15}}>
            </TouchableOpacity>


            <TouchableOpacity
                style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,borderRadius:15}}>


            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,marginTop:'16%',borderRadius:15}}>
            </TouchableOpacity>

            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'blue',margin:5,borderRadius:15}}>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'blue',margin:5,marginTop:'16%',borderRadius:15}}>
            </TouchableOpacity>
        </View>



    </View>















    <View style={{width:'100%',height:undefined,}}>
        <Text style={{textAlign: 'center',fontSize:20,fontWeight: 'bold'}}>{this.state.istrue===true?<Text>Buckle up In {this.state.timer}</Text>  : null}</Text>

    </View>


<View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',alignSelf:'center',flex:.5}}>


    <TouchableOpacity onPress={()=>{this.changestate();this.ShowAlertWithDelay();}}
                      style={{borderRadius:100/2,backgroundColor: '#4caf50',width:100,height:100,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
        <Icon name="google-play" size={40} color="#fff" style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginLeft:5}}/>


    </TouchableOpacity>

</View>
</View>
        )
    }
}


const profile2 = createStackNavigator(

    {
        // Home:{screen:Daily_Routine,
        //     headerMode: 'none',
        //     headerTransparent: true,
        //
        //     navigationOptions: {
        //         header:null,
        //         headerStyle: { Color: 'red',
        //             backgroundColor: '#fff',
        //             borderBottomColor: '#fff',
        //             headerMode:null
        //
        //
        //
        //         },
        //     },
        //
        // },
        Start:Start,
       Gives:Give,
        Scissor_jump:Scissor_Jump,
        Squat:Squat,

        // V_crunch:V_crunch,
        // Glute_bridge:Glute_bridge,
        // Side_leg:Side_lift,
        // Jumping_Jack:Jumping_jack,



    },

    {
        headerMode: 'none',
        headerTransparent: true,



        initialRouteName:'Start'
    }

)

const AppContainers1 = createAppContainer(profile2);

export default class App extends React.Component {
    render() {
        return <AppContainers1 />;
    }
}




