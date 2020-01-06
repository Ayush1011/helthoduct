import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    Dimensions,
    FlatList,
    TouchableOpacity, AsyncStorage, TouchableHighlight,ImageBackground
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Storage from 'react-native-storage';
import {BoxShadow} from 'react-native-shadow'

import {Container,Content,Header,Form,Input,Item,Label} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import Profile from "./profile";


const storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

let profilemodule=0

let todaymodule=0
export default class Calories extends React.Component{

    constructor(){
        super()

        this.state={
            calofe:0,
            calofi:0,
            calowe:0,
            calowi:0,
            calole:0,
            caloli:0,
            caloab:0,
            caloai:0,
            caloda:0,
            calobu:0,
            calocb:0,
            calocw:0,
            istruefe:0,
            dailyprogress:0,
            lastprogress:0,
            toshow:false,
            showprogress:0,
            savedata:false
        }



    }




    calculateprogress=()=>{

        let myinterval = setInterval(() => {

                let calc=this.state.calofe+this.state.calofi+this.state.calowe+this.state.calowi+this.state.calole+this.state.caloli+this.state.caloab+this.state.caloai+this.state.caloda+this.state.calobu+this.state.calocb+this.state.calocw

                this.setState({dailyprogress:calc})

            },

            1000);


    }



    saveprofiledata=()=> {
        storage.save({
            key: 'profile', // Note: Do not use underscore("_") in key!
            data: {

                lastprogress: this.state.dailyprogress

            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: null
        })


    }


    getprofiledata=()=>{

        storage
            .load({
                key: 'profile',


                autoSync: true,


                syncInBackground: true,

                // you can pass extra params to the sync method
                // see sync example below
                syncParams: {
                    extraFetchOptions: {
                        // blahblah
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                // found data go to then()
                this.setState({showprogress: ret.lastprogress})
            })
            .catch(err => {
                // any exception including data not found
                // goes to catch()
                console.warn(err.message);
                switch (err.name) {
                    case 'NotFoundError':
                        // TODO;
                        break;
                    case 'ExpiredError':
                        // TODO
                        break;
                }
            });



        // console.log('hii'+this.state.showprogress)



    }


componentDidMount() {



    let myinterval = setInterval(() => {


            AsyncStorage.setItem("username", this.state.showprogress).then(
                username => {

                }
            );
        this.getprofiledata()
            profilemodule=this.state.showprogress
            todaymodule:this.state.dailyprogress
        },

        1000);

}


    render(){
        return(
            <View>
<ScrollView>
    <View style={{height:0,width:0}}>
    </View>

                <View style={{flex:1,flexDirection:'row',marginTop:'5%'}}>
                    <View style={{flex:.5,margin:5}}>
                    <View style={{backgroundColor:'#F1F5FC',height:140,width:140,borderRadius:70,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#E7ECFF',height:120,width:120,margin:25,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor:'#D4DBF7',height:100,width:100,margin:25,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:35}}>{this.state.dailyprogress}</Text>
                            <Text style={{fontSize:15}}>Kcal</Text>

                        </View>
                    </View>
                    </View>
                    </View>
                    <View style={{flex:.5,flexDirection:'column',marginTop:'10%'}}>
                        <Text style={{fontSize:25,fontWeight: 'bold'}}>Analyse </Text>
                        <Text style={{fontSize:25,fontWeight: 'bold'}}>Today's Goal</Text>
                    </View>




                </View>


    {/*<View style={{flex:1,flexDirection:'row',marginTop:'5%'}}>*/}
    {/*    <View style={{flex:.5,margin:5}}>*/}
    {/*        <View style={{backgroundColor:'#F1F5FC',height:140,width:140,borderRadius:70,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>*/}
    {/*            <View style={{backgroundColor:'#E7ECFF',height:120,width:120,margin:25,borderRadius:60,justifyContent:'center',alignItems:'center'}}>*/}
    {/*                <View style={{backgroundColor:'#D4DBF7',height:100,width:100,margin:25,borderRadius:50,justifyContent:'center',alignItems:'center'}}>*/}
    {/*                    <Text style={{fontWeight:'bold',fontSize:35}}>{this.state.showprogress}</Text>*/}
    {/*                    <Text style={{fontSize:15}}>Kcal</Text>*/}
    {/*                </View>*/}
    {/*            </View>*/}
    {/*        </View>*/}
    {/*    </View>*/}
    {/*    <View style={{flex:.5,flexDirection:'column',marginTop:'10%'}}>*/}
    {/*        <Text style={{fontSize:25,fontWeight: 'bold'}}>Moniter </Text>*/}
    {/*        <Text style={{fontSize:25,fontWeight: 'bold'}}>Last Progress</Text>*/}
    {/*    </View>*/}




    {/*</View>*/}




    <View style={{flex:1,flexDirection:'row'}}>


         <View style={{flex:.6,alignItems:'center',justifyContent:'center'}}>
             {this.state.savedata===true?<Text style={{textAlign:'center',color:'grey',alignItems:'center',justifyContent:'center',fontSize:20}}>Saved!!</Text>:<View/>}
         </View>

           <View style={{flex:.4}}>
               <LinearGradient colors={['#a5d6a7', '#66bb6a', '#43a047']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 1.0, y: .5}} style={{borderRadius:50,height:50,width:80,justifyContent:'center',alignItems:'center'}} >

               <TouchableOpacity style={{borderRadius:50,height:50,width:120,justifyContent:'center',alignItems:'center'}} onPress={()=>{this.saveprofiledata();this.setState({savedata:true})}}>
               <Text style={{color:'#fff',textAlign:'center',justifyContent:'center',alignItems:'center',fontSize:15,fontWeight:'bold'}}>Save</Text>
               </TouchableOpacity>
               </LinearGradient>
               </View>
       </View>




                <View style={{flex:1,flexDirection:'row',marginTop:'15%',width:'90%',alignSelf:'center'}}>



                    {this.state.calofe===0?

                        <LinearGradient colors={['#8EB2F7', '#5D71AC', '#555DAA']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,borderRadius:15,elevation: 15}} >





                            <TouchableOpacity style={{height:200,margin:5}} onPress={()=>{this.calculateprogress(this.setState({calofe:68}))}} >
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{flex:.5,}}>
                                        <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                            <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >68</Text>
                                        </View>
                                    </View>

                                    <View style={{flex:.4,flexDirection:'column'}}>

                                        <View style={{flex:.5,flexDirection:'column'}}>
                                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Full Body Easy</Text>


                                        </View>
                                        <View style={{flex:.6,flexDirection:'row',}}>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>4.0</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                            </View>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>7</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                            </View>
                                        </View>

                                    </View>

                                </View>

                            </TouchableOpacity>




                        </LinearGradient>


                        :



                        <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,borderRadius:15}} >





                            <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({calofe:0}) }>
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{flex:.5,}}>
                                        <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                            <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >68</Text>
                                        </View>
                                    </View>

                                    <View style={{flex:.4,flexDirection:'column'}}>

                                        <View style={{flex:.5,flexDirection:'column'}}>
                                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Full Body Easy</Text>


                                        </View>
                                        <View style={{flex:.6,flexDirection:'row',}}>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>4.0</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                            </View>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>7</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                            </View>
                                        </View>

                                    </View>

                                </View>

                            </TouchableOpacity>




                        </LinearGradient>


                    }



                    {this.state.calofi===0?


                        <LinearGradient colors={['#FA7B8A', '#FF7D79', '#FF937B']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,borderRadius:15}} >

                            <TouchableOpacity style={{flex:1,margin:5}}  onPress={()=>{this.calculateprogress(this.setState({calofi:134}))}} >

                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{flex:.5,}}>
                                        <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                            <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >134</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:.5,}}>
                                        <View style={{flex:.35,flexDirection:'column',}}>
                                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Full Body(Int.)</Text>

                                        </View>
                                        <View style={{flex:.65,flexDirection:'row',}}>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>4.0</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                            </View>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </LinearGradient>


                    :


                        <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,borderRadius:15}} >

                            <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>this.setState({calofi:0})}>

                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{flex:.5,}}>
                                        <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                            <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >134</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:.5,}}>
                                        <View style={{flex:.35,flexDirection:'column',}}>
                                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Full Body(Int.)</Text>

                                        </View>
                                        <View style={{flex:.65,flexDirection:'row',}}>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>4.0</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                            </View>
                                            <View style={{flex:.5,flexDirection:'column'}}>
                                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </LinearGradient>






                    }



                </View>


    <View style={{flex:1,flexDirection:'row',marginTop:'15%',width:'90%',alignSelf:'center'}}>



        {this.state.calowe===0?

            <LinearGradient colors={['#F57FD5', '#F079B7', '#FE5D8F']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >


                <TouchableOpacity style={{flex:1,margin:5}}  onPress={()=>{this.calculateprogress(this.setState({calowe:74}))}}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >74</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Weight Loss Easy</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>6.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>12</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>

        :

            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >


                <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>this.setState({calowe:0})}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >74</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Weight Loss Easy</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>6.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>12</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }


















        {this.state.calowi===0?
            <LinearGradient colors={['#7FF5A6', '#5CD5C6', '#5CD5C6']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-37%',borderRadius:15,elevation: 15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>{this.calculateprogress(this.setState({calowi:124}))}}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >124</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Weight Loss Intermediate</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>6.0</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>12</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>

            :
            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-40%',borderRadius:15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({calowi:0})}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >124</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Weight Loss Intermediate</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>6.0</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>12</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>

        }

    </View>




    <View style={{flex:1,flexDirection:'row',marginTop:'15%',width:'90%',alignSelf:'center'}}>
        {this.state.calole===0?
            <LinearGradient colors={['#8EB2F7', '#5D71AC', '#555DAA']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-15%',borderRadius:15,elevation: 15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>{this.calculateprogress(this.setState({calole:34}))}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >34</Text>
                            </View>
                        </View>

                        <View style={{flex:.4,flexDirection:'column'}}>

                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Legs Easy</Text>


                            </View>
                            <View style={{flex:.6,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>6.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>12</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </LinearGradient>

        :
            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-15%',borderRadius:15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({calole:0})}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >34</Text>
                            </View>
                        </View>

                        <View style={{flex:.4,flexDirection:'column'}}>

                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Legs Easy</Text>


                            </View>
                            <View style={{flex:.6,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>6.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>12</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </LinearGradient>

        }

        {this.state.caloli===0?

            <LinearGradient colors={['#FA7B8A', '#FF7D79', '#FF937B']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >

                <TouchableOpacity style={{flex:1,margin:5,height:200}} onPress={()=>{this.calculateprogress(this.setState({caloli:55}))}}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >55</Text>
                            </View>
                        </View>
                        <View style={{flex:.5}}>
                            <View style={{flex:.6,flexDirection:'column',marginTop:'15%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Legs Intermediate</Text>

                            </View>
                            <View style={{flex:.4,flexDirection:'row',marginTop:'15%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        :
            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >

                <TouchableOpacity style={{flex:1,margin:5,height:200}} onPress={()=>this.setState({caloli:0})}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >134</Text>
                            </View>
                        </View>
                        <View style={{flex:.5}}>
                            <View style={{flex:.6,flexDirection:'column',marginTop:'15%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Legs Intermediate</Text>

                            </View>
                            <View style={{flex:.4,flexDirection:'row',marginTop:'15%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>

        }


    </View>




    <View style={{flex:1,flexDirection:'row',marginTop:'15%',width:'90%',alignSelf:'center'}}>


        {this.state.caloab===0?

            <LinearGradient colors={['#7FF5A6', '#5CD5C6', '#5CD5C6']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >
                <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>{this.calculateprogress(this.setState({caloab:61}))}}>

                    <View style={{flex:1,flexDirection:'column'}} >
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >61</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Abs Beginner</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        :
            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >
                <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>{this.setState({caloab:0})}}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >61</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Abs Beginner</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }

        {this.state.caloai===0?
            <LinearGradient colors={['#F57FD5', '#F079B7', '#FE5D8F']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-37%',borderRadius:15,elevation: 15}} >

                <TouchableOpacity style={{height:200,margin:5}}  onPress={()=>{this.calculateprogress(this.setState({caloai:120}))}}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >120</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Abs Intermediate</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.5</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>11</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>

        :

            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-40%',borderRadius:15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({caloai:0})}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >120</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Abs Intermediate</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.5</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>11</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }


    </View>


    <View style={{flex:1,flexDirection:'row',width:'90%',alignSelf:'center'}}>
        {this.state.caloda===0?

            <LinearGradient colors={['#FA7B8A', '#FF7D79', '#FF937B']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,borderRadius:15,elevation: 15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>{this.calculateprogress(this.setState({caloda:68}))}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >68</Text>
                            </View>
                        </View>

                        <View style={{flex:.4,flexDirection:'column'}}>

                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Daily Awakening</Text>


                            </View>
                            <View style={{flex:.6,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>3.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>6</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </LinearGradient>
        :

            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,borderRadius:15}} >

                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({caloda:0})}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >68</Text>
                            </View>
                        </View>

                        <View style={{flex:.4,flexDirection:'column'}}>

                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Daily Awakening</Text>


                            </View>
                            <View style={{flex:.6,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>3.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:20}}>6</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </LinearGradient>
        }




        {this.state.calobu===0?
            <LinearGradient colors={['#8EB2F7', '#5D71AC', '#555DAA']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,borderRadius:15}} >

                <TouchableOpacity style={{margin:5,height:120}} onPress={()=>{this.calculateprogress(this.setState({calobu:34}))}}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.4,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >34</Text>
                            </View>
                        </View>
                        <View style={{flex:.6,}}>
                            <View style={{flex:.35,flexDirection:'column',}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Butt Build Up</Text>

                            </View>
                            <View style={{flex:.65,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>3.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        :

            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,borderRadius:15}} >

                <TouchableOpacity style={{margin:5,height:120}} onPress={()=>this.setState({calobu:0})}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.4,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >34</Text>
                            </View>
                        </View>
                        <View style={{flex:.6,}}>
                            <View style={{flex:.35,flexDirection:'column',}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Butt Build Up</Text>

                            </View>
                            <View style={{flex:.65,flexDirection:'row',}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>3.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }


    </View>


    <View style={{flex:1,flexDirection:'row',marginTop:'15%',width:'90%',alignSelf:'center',}}>
        {this.state.calocb===0?
            <LinearGradient colors={['#F57FD5', '#F079B7', '#FE5D8F']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >
                <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>{this.calculateprogress(this.setState({calocb:38}))}}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%',}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >38</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Chest Booster</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
            :

            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:120,margin:5,marginTop:'-15%',borderRadius:15}} >
                <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>this.setState({calocb:0})}>

                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:.5,}}>
                            <View style={{height:45,width:45,borderRadius:45/2,borderWidth:3,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%',}}>
                                <Text style={{textAlign:'center',fontSize:15,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >38</Text>
                            </View>
                        </View>
                        <View style={{flex:.5,}}>
                            <View style={{flex:.5,flexDirection:'column',marginTop:'12%'}}>
                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Chest Booster</Text>

                            </View>
                            <View style={{flex:.5,flexDirection:'row',marginTop:'12%'}}>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>5.0</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                                </View>
                                <View style={{flex:.5,flexDirection:'column'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>10</Text>
                                    <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }


        {this.state.calocw===0?
            <LinearGradient colors={['#7FF5A6', '#5CD5C6', '#5CD5C6']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-37%',borderRadius:15,elevation: 15}} >
                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>{this.calculateprogress(this.setState({calocw:87}))}}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >87</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Core Workout</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>4.0</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        :
            <LinearGradient colors={['#f5f5f5', '#e0e0e0','#9e9e9e']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,height:200,margin:5,marginTop:'-40%',borderRadius:15}} >
                <TouchableOpacity style={{height:200,margin:5}} onPress={()=>this.setState({calocw:0})}>
                    <View style={{flex:.5,flexDirection:'column'}}>
                        <View style={{flex:1,}}>
                            <View style={{height:90,width:90,borderRadius:45,borderWidth:4,alignSelf:'center',borderTopColor:'#fff',borderLeftColor:'#fff',borderRightColor:'#fff',borderBottomColor:'transparent',marginTop:'5%'}}>
                                <Text style={{textAlign:'center',fontSize:25,color:'#fff',fontWeight:'bold',marginTop:'15%'}} >87</Text>
                            </View>
                        </View>



                    </View>

                    <View style={{flex:.5,}}>
                        <View style={{flex:.35,flexDirection:'column',}}>
                            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Core Workout</Text>

                        </View>
                        <View style={{flex:.65,flexDirection:'row',}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>4.0</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Mins</Text>
                            </View>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:15}}>7</Text>
                                <Text style={{textAlign:'center',color:'#fff'}}>Action</Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </LinearGradient>
        }


    </View>





</ScrollView>
            </View>

        )
    }




}





export {profilemodule}

export {todaymodule}


