import React, { Component } from 'react';
import { View, ScrollView,BackHandler , Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Scissor_Jump from "./Scissor_Jump";
import Kneepushup from "./kneepushup";
import Icon from "react-native-vector-icons/Entypo";
import Endwork from './Endwork'
import {Daily_Routine} from "./Daily_Routine";


export class Start extends Component {

    constructor() {
        super()
        this.state = {

            timepassed:0,
            step:0,
            istrue:false,
            timer:5,isdisiable:false
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        this.props.navigation.navigate('Home');
        this.setState({step:0})
        if(this.state.step>=0){
            this.setState({step:0})

        }

        return true;
    };
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
                this.props.navigation.navigate('Kneepushup')
            }
            else if(this.state.step===2){
                this.props.navigation.navigate('Scissor_jump')
            }
        }, 1000);




    }



    changestate=()=>{

        let myinterval=setInterval(() => {
            this.setState({timer: this.state.timer - 1,
                isdisiable:true



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
<View style={{flex:1,flexDirection:'column',backgroundColor:'#f1f1f1'}}>


    <View style={{flex:1,flexDirection:'column',height:'100%',margin:5,marginTop:25}}>
        <View style={{flex:1,margin:'5%',flexDirection:'row',}}>
            <TouchableOpacity

                style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,borderRadius:15}}>

                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#1E1E1E',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#1E1E1E',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,marginTop:'16%',borderRadius:15}}>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#ABABAB',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#ABABAB',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>


            <TouchableOpacity
                style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,borderRadius:15}}>
                <View style={{flex:.4,flexDirection:'column',backgroundColor:'#1E1E1E',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.61,flexDirection:'column',backgroundColor:'#1E1E1E',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'red',margin:5,marginTop:'16%',borderRadius:15}}>

                <View style={{flex:.61,flexDirection:'column',backgroundColor:'#ABABAB',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.4,flexDirection:'column',backgroundColor:'#ABABAB',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'blue',margin:5,borderRadius:15}}>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#1E1E1E',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#1E1E1E',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:.5,height:200,width:'100%',backgroundColor:'blue',margin:5,marginTop:'16%',borderRadius:15}}>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#ABABAB',borderTopRightRadius:15,borderTopLeftRadius:15}}>

                </View>
                <View style={{flex:.5,flexDirection:'column',backgroundColor:'#ABABAB',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>

                </View>

            </TouchableOpacity>
        </View>



    </View>















    <View style={{width:'100%',}}>
        <Text style={{textAlign: 'center',fontSize:20,fontWeight: 'bold'}}>{this.state.istrue===false?<Text>Great things are never easy</Text>  : null}</Text>

        <Text style={{textAlign: 'center',fontSize:20,fontWeight: 'bold'}}>{this.state.istrue===true?<Text>Buckle up In {this.state.timer}</Text>  : null}</Text>

    </View>


<View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',alignSelf:'center',flex:.5}}>


    <TouchableOpacity  activeOpacity={0.6}
                         disabled={this.state.isdisiable} onPress={()=>{this.changestate();this.ShowAlertWithDelay();}}
                      style={{borderRadius:12,width:120,height:120,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
        {/*<Icon name="google-play" size={40} color="#fff" style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginLeft:5}}/>*/}
<Image source={require('../gifs/oie_0bCYyY52Ds2z.gif')} />

    </TouchableOpacity>

</View>
</View>
        )
    }
}


const profile2 = createStackNavigator(

    {
        // Home:{screen:fullbodyeasy,
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
         Home:() => <Daily_Routine/>,
        Start:Start,

        Scissor_jump:Scissor_Jump,
        Squat:Kneepushup,
         End:Endwork,
        // V_crunch:V_crunch,
        // Glute_bridge:Glute_bridge,
        // Side_leg:Side_lift,
        // Jumping_Jack:Reversesnowangels,



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




