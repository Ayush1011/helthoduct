import React, { Component } from 'react';
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {HomePage} from "../HomePage";
import Scissor from "../weightloss_gif";
import Modal from "react-native-simple-modal";





export  class Weightloss extends Component{
    static navigationOptions = {
        header: null,
        headerVisible: false,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: 'red'
        },

    }
    constructor()
    {
        super()
        this.state={
            open:false,
            offset:0

        }
    }

    modalDidOpen = () => console.log("Modal did open.");

    modalDidClose = () => {
        this.setState({ open: false });
        console.log("Modal did close.");
    };



    openModal = () => this.setState({ open: true });
    closeModal = () => this.setState({ open: false });

    render(){
        return(



                <View style={{width:'100%',height:'100%'}}>





                    <ScrollView>

<View style={{backgroundColor:'red',width:'100%',
    justifyContent:"flex-start",

    alignSelf: 'center',

    height:200,}}>

    <Image
        style={{width:'100%',height:'100%'}}
        source={{uri:'https://img.etimg.com/thumb/msid-68475290,width-643,imgsize-100881,resizemode-4/exercise-fitness-gettyimage.jpg'}}/>

</View>


<TouchableOpacity style={{backgroundColor:'red',width:'90%',
    justifyContent:"flex-start",marginTop:'-5%',

    alignSelf: 'center',

    height:150,borderRadius:25,}} onPress={()=>this.openModal()}>







    <Modal
        offset={this.state.offset}
        open={this.state.open}
        modalDidOpen={this.modalDidOpen}
        modalDidClose={this.modalDidClose}
        style={{position: 'absolute',
        }}

        modalStyle={{
            borderRadius: 20,

            backgroundColor: "blue",
            height:300,position:'absolute',width:'90%',
        }}
    >




            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
            <TouchableOpacity style={{ margin: 5 }} onPress={this.moveUp}>
                <Text>Move modal up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ margin: 5 }}
                onPress={this.resetPosition}
            >
                <Text>Reset modal position</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
                <Text>Close modal</Text>
            </TouchableOpacity>
    </Modal>








</TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'red',width:'90%',
                            justifyContent:"flex-start",marginTop:'5%',borderRadius:25,

                            alignSelf: 'center',

                            height:150,}}   onPress={()=>this.props.navigation.navigate('scissor')}>



                            <Modal
                                offset={this.state.offset}
                                open={this.state.open}
                                modalDidOpen={this.modalDidOpen}
                                modalDidClose={this.modalDidClose}
                                style={{position: 'absolute',
                                   }}

                                modalStyle={{
                                    borderRadius: 20,bottom:0,

                                    backgroundColor: "blue",
                                    height:200,position:'absolute',width:'90%',zindex:999
                                }}
                            >




                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={this.moveUp}>
                                        <Text>Move modal up</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ margin: 5 }}
                                        onPress={this.resetPosition}
                                    >
                                        <Text>Reset modal position</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
                                        <Text>Close modal</Text>
                                    </TouchableOpacity>
                                </View>


                            </Modal>

                        </TouchableOpacity>


                    <TouchableOpacity style={{backgroundColor:'red',width:'90%',
                        justifyContent:"flex-start",marginTop:'5%',

                        alignSelf: 'center',borderRadius:25,

                        height:150,}}>


                    </TouchableOpacity>








                        <TouchableOpacity style={{backgroundColor:'red',width:'90%',
                            justifyContent:"flex-start",marginTop:'5%',

                            alignSelf: 'center',borderRadius:25,

                            height:150,}}>


                        </TouchableOpacity>











                        <TouchableOpacity style={{backgroundColor:'red',width:'90%',
                            justifyContent:"flex-start",marginTop:'5%',

                            alignSelf: 'center',borderRadius:25,

                            height:150,}}>


                        </TouchableOpacity>







                        <TouchableOpacity style={{backgroundColor:'red',width:'90%',
                            justifyContent:"flex-start",marginTop:'5%',

                            alignSelf: 'center',borderRadius:25,

                            height:150,}}>


                        </TouchableOpacity>





                    </ScrollView>
























                </View>















        )
    }

}





export class Weightloss_ex extends React.Component{


render(){
    return(

        <View>













        </View>
    )
}



}







const profile1 = createStackNavigator(

    {
        Home:Weightloss,
        scissor:Scissor

    },

)

const AppContainer = createAppContainer(profile1);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}




