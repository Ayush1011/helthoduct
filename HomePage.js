import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,

    TouchableHighlight,
    TouchableOpacity,

    ImageBackground
    , Button, StyleSheet, AsyncStorage,
    ScrollView,
} from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';




import styled from "styled-components/native"; // 3.1.6
import Carousel from 'react-native-snap-carousel';

import Daily_Routine from "./Excersises/fullbodyeasy/Daily_Routine";
import Icon from "react-native-vector-icons/FontAwesome5";
import Profile from "./profile";
export class HomePage extends Component {

    static navigationOptions = {

        header:null,
        headerStyle: { Color: 'red',
            backgroundColor: '#fff',
            borderBottomColor: '#fff',
            headerMode:null



        },

    }
        constructor(props){
        super();
        this.state = {
            errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
    }

    init(){
        this.state = {
            videos: [


                {
                    id: "1",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/1home.jpg?alt=media&token=5d6733e7-c27e-4140-a916-1209e2e21377",
                    title: "Daily Wakening 5o'clock ",
                    content:"Your body can stand almost anything. It’s your mind that you have to convince"
                },
                {
                    id: "2",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/2home.jpg?alt=media&token=50c2e579-1ae2-4356-8897-51f40ff10416",
                    title: "Weight Loss 6o'clock",
                    content:"Push yourself because no one else is going to do it for you."
                }, {
                    id: "3",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/3home.jpg?alt=media&token=b4bc3d91-c191-4cd6-b8eb-4e34639a3d40",
                    title: "Core Workout 7o'clock ",
                    content:"Obstacles can’t stop you. Problems can’t stop you. People can’t stop you. Only you can stop you."

                }, {
                    id: "4",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/4home.jpg?alt=media&token=97de4bfd-f44e-428f-8970-64e37682cefe",
                    title: "Abs Builder 8o'clock",
                    content:"Motivation is what gets you started. Habit is what keeps you going."

                },{
                    id: "5",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/5home%20(1).jpg?alt=media&token=4258ef7d-1623-4bb4-a35d-3f97e6efdacc",
                    title: "Butt Build up 9o'clock",
                    content:"What seems impossible today will one day become your warm-up."

                },{
                    id: "6",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/6home.jpg?alt=media&token=53b424b3-3994-4bc4-b1ea-ca3db303cfe0",
                    title: "Legs Builder 10o'clock",
                    content:"Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle."

                },{
                    id: "7",
                    thumbnail: "https://firebasestorage.googleapis.com/v0/b/healthoduct-4f393.appspot.com/o/7home.jpg?alt=media&token=feb3c8df-0906-479e-8478-1d687d245a6c",
                    title: "Chest Builder 11o'clock",
                    content:"Less sugar, more fruit. Less soda, more water. Less driving, more walking. Less worry, more sleep. Less words, more action."

                }
            ]
        };

        console.log("ThumbnailCarousel Props: ", this.props)
    }

    handleSnapToItem(index){
        console.log("snapped to ", index)
    }

    forward=(a)=>{
     if(a==1){

            this.props.navigation.navigate('Wakeing')
        }


       // else if(a==2){
       //      this.props.navigation.navigate('Weightloss')
       //  }
       //  else if(a==3){
       //
       //      this.props.navigation.navigate('Core_Workout')
       //  }
       //
       //  else if(a==4){
       //
       //      this.props.navigation.navigate('Abs_Builder')
       //  }  else if(a==5){
       //
       //      this.props.navigation.navigate('Butt_build')
       //  }else if(a==6){
       //
       //      this.props.navigation.navigate('Legs')
       //  }else if(a==7){
       //
       //      this.props.navigation.navigate('Chest_builder')
       //  }
    }



    render = () => {
        return (
<View style={{flex:1,flexDirection:'column',height:'100%'}}>
    <ScrollView>
    <Text style={{fontSize: 35,marginLeft: '5%',margin:'1%',fontWeight:'light'}}>Find a</Text>
    <Text style={{fontSize: 35,marginLeft: '5%',margin:'1%',fontWeight:'bold'}}>Workout Type</Text>

<View style={{flex:1,flexDirection:'column',height:'100%',margin:5}}>
    <View style={{flex:1,margin:'5%',flexDirection:'row',}}>
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


    <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginTop:'6%',marginRight:'5%'}}>
        <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Wakeing')}

            style={{flex:.5,height:220,width:'100%',backgroundColor:'#4caf50',margin:5,borderRadius:15}}>

             <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                 source={{uri:'https://images.shape.mdpcdn.com/sites/shape.com/files/styles/channel_feature_panel_image/public/jen-goal-crushers-challenge-promo-1000.jpg?itok=DJd6_Wbl'}}/>

                 <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Full Body Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('')}

            style={{flex:.5,height:220,width:'100%',backgroundColor:'#795548',margin:5,marginTop:'16%',borderRadius:15}}>


            <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                   source={{uri:'https://www.thegrowthop.com/wp-content/uploads/2019/04/1a_GettyImages-1007730100-e1555440810469.jpg'}}/>

            <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Weight Loss</Text>

        </TouchableOpacity>



    </View>
        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#673ab7',margin:5,borderRadius:15}}>
                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://media1.popsugar-assets.com/files/thumbor/DwuRAXRaR7-TXSsEbA0U7L0GfXg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/31/044/n/1922729/8c189b805d422c81c9ba55.76538773_/i/3-Minute-Ab-Workout-Runners.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Abs buildup</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#3f51b5',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://66.media.tumblr.com/03df951f3345e4f55d5d9435af06d4a9/tumblr_p5evieqoeY1x1g1yio1_400.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>core workout</Text>

            </TouchableOpacity>



        </View>

        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#00bcd4',margin:5,borderRadius:15}}>

                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2017/03/iStock-501776792.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>slimmer legs</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#607d8b',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-with-medicine-ball-exercising-on-royalty-free-image-1004449544-1550861346.jpg?crop=0.56251xw:1xh;center,top&resize=480:*'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>butt buildup</Text>

            </TouchableOpacity>



        </View>
        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#673ab7',margin:5,borderRadius:15}}>
                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://media1.popsugar-assets.com/files/thumbor/DwuRAXRaR7-TXSsEbA0U7L0GfXg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/31/044/n/1922729/8c189b805d422c81c9ba55.76538773_/i/3-Minute-Ab-Workout-Runners.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Abs buildup</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#3f51b5',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://66.media.tumblr.com/03df951f3345e4f55d5d9435af06d4a9/tumblr_p5evieqoeY1x1g1yio1_400.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>core workout</Text>

            </TouchableOpacity>



        </View>
        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#673ab7',margin:5,borderRadius:15}}>
                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://media1.popsugar-assets.com/files/thumbor/DwuRAXRaR7-TXSsEbA0U7L0GfXg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/31/044/n/1922729/8c189b805d422c81c9ba55.76538773_/i/3-Minute-Ab-Workout-Runners.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Abs buildup</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#3f51b5',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://66.media.tumblr.com/03df951f3345e4f55d5d9435af06d4a9/tumblr_p5evieqoeY1x1g1yio1_400.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>core workout</Text>

            </TouchableOpacity>



        </View>
        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#673ab7',margin:5,borderRadius:15}}>
                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://media1.popsugar-assets.com/files/thumbor/DwuRAXRaR7-TXSsEbA0U7L0GfXg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/31/044/n/1922729/8c189b805d422c81c9ba55.76538773_/i/3-Minute-Ab-Workout-Runners.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Abs buildup</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#3f51b5',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://66.media.tumblr.com/03df951f3345e4f55d5d9435af06d4a9/tumblr_p5evieqoeY1x1g1yio1_400.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>core workout</Text>

            </TouchableOpacity>



        </View>
        <View style={{flex:1,marginLeft:'5%',flexDirection:'row',marginRight:'5%'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#673ab7',margin:5,borderRadius:15}}>
                <Image style={{flex:.9 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://media1.popsugar-assets.com/files/thumbor/DwuRAXRaR7-TXSsEbA0U7L0GfXg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/31/044/n/1922729/8c189b805d422c81c9ba55.76538773_/i/3-Minute-Ab-Workout-Runners.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>Abs buildup</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('')}

                style={{flex:.5,height:220,width:'100%',backgroundColor:'#3f51b5',margin:5,marginTop:'16%',borderRadius:15}}>


                <Image style={{flex:.83 , width: undefined, height: undefined,borderRadius:15}}
                       source={{uri:'https://66.media.tumblr.com/03df951f3345e4f55d5d9435af06d4a9/tumblr_p5evieqoeY1x1g1yio1_400.jpg'}}/>

                <Text style={{color:'white',textAlign: 'left',fontSize:17,fontWeight:'bold',alignItems:'center',marginTop:'5%',marginLeft:'10%'}}>core workout</Text>

            </TouchableOpacity>



        </View>

</ScrollView>

</View>

        )
    }
}




const Home1 = createStackNavigator(
    {
        Home: HomePage,
        Wakeing:{screen:Daily_Routine,
            navigationOptions: {
                headerTransparent: true,

                headerStyle: {
                    Color: 'red',

                    headerMode: null


                },
            }



        },
        // Weightloss:Weightloss,
        // Core_Workout:Core_Workout,
        // Abs_Builder:Abs_Workout,
        // Butt_build:Butt_buildup,
        // Legs:Slimmer_legs,
        // Chest_builder:Chest_builder


    },


)
const profile = createStackNavigator(

    {
        profile:Profile,

    }
)

const RootStack=createBottomTabNavigator(
    {
        Home:{screen:Home1,
            navigationOptions: {
                headerTransparent: true,

                header:null,
                headerStyle: { Color: 'red',

                    headerMode:null



                },
                tabBarOptions : {
                    style: {
                        backgroundColor: '#fff',
                        borderColor:'#fff'
                    }
                },
                tabBarLabel:"Home",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={25} color="#837A83" />
                )
            },


        },

        Profile:{screen:profile,
            navigationOptions: {

                tabBarOptions : {
                    style: {
                        backgroundColor: '#fff',
                    }
                },
                tabBarLabel:"profile",


                tabBarIcon: ({ tintColor }) => (
                    <Icon name="fingerprint" size={25} color="#837A83" />
                )
            },

        }
    },
    {
        navigationOptions:{
            header:null,
            headerStyle: { Color: 'red',
                backgroundColor: '#fff',
                borderBottomColor: '#fff',
                headerMode:null



            },


        }
    }


)




const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}