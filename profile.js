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
import {GoogleSigninButton} from "react-native-google-signin";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
// import {userNameKey} from './constant';
import {profilemodule, todaymodule} from './calories'
import {likefe} from './Excersises/fullbodyeasy/Daily_Routine'
import {likefi} from "./Excersises/fullbodyintermidiate/Fullbodyintermidiate";
import {likewe} from "./Excersises/Weightlosseasy/Weightloss";
import {likewi} from "./Excersises/wightlossintermidiate/weightlossintermidiate";
import {likele} from "./Excersises/LegsEasy/legseasy";
import {likeli} from "./Excersises/legsintermidiate/legsintermidiate";
import {likeab} from "./Excersises/Absbeginner/Absbeginner";
import {likeda} from "./Excersises/Daily awakening/Dailyawakening";
import {likebu} from "./Excersises/Buildyourbutt/buildyourbutt";
import {likeai} from "./Excersises/Absintermidiate/Absintermidiate";
import {likecb} from "./Excersises/Chestbooster/Chestbooster";
import {likecw} from "./Excersises/Coreworkout/Coreworkout";
const storage = new Storage({
    // maximum capacity, default 1000
    size: 10000,

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




global.storage = storage;


export default class Profile extends Component {
    static navigationOptions = {

        header:null,
        headerStyle: { Color: 'red',
            backgroundColor: '#fff',
            borderBottomColor: '#fff',
            headerMode:null



        },

    }

    constructor(props){
        super(props)
        this.state={
            showReal: false,
            loading: true,
            weight:0,
            height:0,
            age:0,
            bmi:0,
            Disable:true,
            data:[],
            fetchshow:true,
            actualname:'',
            tocall:0,
            photodisiable:false,
            showmaindesign:true,
            ndata:[],
            picurl:'',
            profilename:'',
            email:'',
            showdefault:0,
            calofe:68,
            calofi:134,
            calowe:74,
            calowi:124,
            calole:34,
            caloli:55,
            caloab:61,
            caloai:120,
            caloda:68,
            calobu:34,
            calocb:34,
            calocw:87,
            istruefe:0,
            showprogress:0,
            likefe:0,likefi:0,likewe:0,
            likewi:0,
            likele:0,
            likeli:0,
            likeab:0,
            likeai:0,
            likeda:0,
            likebu:0,
            likecb:0,
            likecw:0,todaymodule:0



        }
    }



    changetime=()=>
    {
        let myinterval = setInterval(() => {


                if(this.state.weight>10&&this.state.height>10){
                    this.setState({Disable:false})
                }
                else{
                    this.setState({Disable:true})

                }
                const c = (this.state.weight)/(this.state.height/100)**2
                this.setState({bmi:c.toFixed(2)})

            },



            1000);


    }







    forceRemount = () => {
        this.setState({ uniqueValue: this.state.uniqueValue + 1})
    }




    savecallinfo=()=>{
        this.setState({showReal:true})
        storage.save({
            key: 'callinfo', // Note: Do not use underscore("_") in key!
            data: {

                showReal:true,
                weight:this.state.weight,
                height:this.state.height,
                bmi:this.state.bmi,
                age:this.state.age,


            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires:null
        })

    }



    saveinfo=()=> {

        this.setState({photodisiable: true})
        console.log('inside saveinfo ' + this.state.photodisiable)

        storage.save({
            key: 'loginState', // Note: Do not use underscore("_") in key!
            data: {

                isvalue: this.props.pic,
                photodisiable: true,
                photo:this.props.picurl,
                profilename:this.props.profilename,
                email:this.props.email,
                showdefault:this.props.showdefault,


            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: null
        })
        console.log('aaaaaa' + this.props.picurl)

    }






     getdata=()=>{

         storage
     .load({
             key: 'loginState',

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
                 console.log(ret.isvalue);
                 this.setState({actualname:ret.isvalue})
                 this.setState({photodisiable:ret.photodisiable})
                 this.setState({picurl:ret.photo,profilename:ret.profilename})
                 this.setState({email:ret.email,showdefault:ret.showdefault,})


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





     }

    getcalldata=()=> {

        storage
            .load({
                key: 'callinfo',


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
                this.setState({showReal: ret.showReal})
                 this.setState({bmi:ret.bmi,height:ret.height,weight:ret.weight,age:ret.age,showdefault:ret.showdefault})
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


    }










    // fetchinfo= async()=>{
    //     const Email = this.state.actualname.split('@')[0].trim()
    //
    //     const response = await fetch('db4free.net:3306/'+Email);
    //     const users = await response.json()
    //     this.setState({ndata:users});
    //
    // }
    //
    //
    //
    // fetchData= ()=>{
    //     const Email = this.state.actualname.split('@')[0].trim()
    //
    //     fetch('db4free.net:3306/profileinfo/'+Email,{
    //         method:'GET'
    //     }).then((response)=>{
    //         return response.json();
    //
    //     }).then((users)=>{
    //         this.setState({data:users});
    //
    //     })
    //
    //
    //
    //
    // }



    // calcbmi=()=>{
    //
    //
    // }


    // setuserdata=()=>{
    //
    //
    //
    //
    //     const Email = this.state.actualname.split('@')[0].trim()
    //
    //
    //     fetch('db4free.net:3306/'+Email, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
    //             'Content-Type': 'application/json'
    //         },
    //
    //
    //         body:JSON.stringify({weight:this.state.weight,height:this.state.height,age:this.state.age,bmi:this.state.bmi})
    //
    //     }).then((response)=>{
    //         return response.json()
    //
    //
    //     }).then((jsondata)=>{
    //         this.setState({data:jsondata})
    //     }).done()
    //
    //
    //
    //
    // }

//
//
// //



    calcgoal=()=>{
        let c=0
        if(this.state.likefe===1)
        {

             c=c+this.state.calofe
        }
        else if(this.state.likefe===1)
        {
            c=c+this.state.calofi

        }
        else if(this.state.likewe===1)
        {
            c=c+this.state.calowe

        }
        else if(this.state.likewi===1)
        {
            c=c+this.state.calowi

        }
        else if(this.state.likele===1)
        {
            c=c+this.state.calole

        }
        else if(this.state.likeli===1)
        {
            c=c+this.state.caloli

        }
        else if(this.state.likeab===1)
        {
            c=c+this.state.caloab

        }
        else if(this.state.likeai===1)
        {
            c=c+this.state.caloai

        }
        else if(this.state.likeda===1)
        {
            c=c+this.state.caloda

        }
        else if(this.state.likebu===1)
        {
            c=c+this.state.calobu

        }
        else if(this.state.likecb===1)
        {
            c=c+this.state.calocb

        } else if(this.state.likecw===1)
        {
            c=c+this.state.calocw

        }
        this.setState({showprogress:c})
    }



saveprofiledata=()=>{
    storage.save({
        key: 'profilestate', // Note: Do not use underscore("_") in key!
        data: {

            // showprogerss: this.state.showprogress

        },

        // if expires not specified, the defaultExpires will be applied instead.
        // if set to null, then it will never expire.
        expires: 24*60*3600
    })

}
    getalldata=()=> {

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
                    // this.setState({showprogersss ret.showprogress})

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






    }






    saveexedata=()=>{
        storage.save({
            key: 'profilestate', // Note: Do not use underscore("_") in key!
            data: {

                todayprogress:profilemodule,

            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: 24*60*3600
        })

    }
    getexedata=()=> {

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
                this.setState({todaymodule:ret.todaymodule})
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






    }
































    componentDidMount() {
        AsyncStorage.getItem('first_time').then((value) => {
            this.setState({ showReal: !!value, loading: false,});


        });

        this.changetime()
        // this.fetchinfo()



            let myinterval = setInterval(() => {
                    this.getdata()
                    this.getcalldata()
                    this.getalldata()
                this.getexedata()
                this.calcgoal()
                this.saveprofiledata()

                    this.setState({likefe:likefe,likefi:likefi,likewe:likewe,likewi:likewi,likele:likele,likeli:likeli,likeab:likeab,likeai:likeai,likeda:likeda,likebu:likebu,likecb:likecb,likecw:likecw})

                let c=0
                if(this.state.likefe===1)
                {

                    c=c+this.state.calofe
                }
                 if(this.state.likefe===1)
                {
                    c=c+this.state.calofi

                }
                 if(this.state.likewe===1)
                {
                    c=c+this.state.calowe

                }
                 if(this.state.likewi===1)
                {
                    c=c+this.state.calowi

                }
                 if(this.state.likele===1)
                {
                    c=c+this.state.calole

                }
                if(this.state.likeli===1)
                {
                    c=c+this.state.caloli

                }
                if(this.state.likeab===1)
                {
                    c=c+this.state.caloab

                }
                 if(this.state.likeai===1)
                {
                    c=c+this.state.caloai

                }
                 if(this.state.likeda===1)
                {
                    c=c+this.state.caloda

                }
                 if(this.state.likebu===1)
                {
                    c=c+this.state.calobu

                }
                 if(this.state.likecb===1)
                {
                    c=c+this.state.calocb

                }  if(this.state.likecw===1)
                {
                    c=c+this.state.calocw

                }
                this.setState({showprogress:c})









                },

                1000);


    }

componentWillMount() {
    this.getcalldata()
    this.getdata()
    this.saveprofiledata()

    this.setState({likefe:likefe,likefi:likefi,likewe:likewe,likewi:likewi,likele:likele,likeli:likeli,likeab:likeab,likeai:likeai,likeda:likeda,likebu:likebu,likecb:likecb,likecw:likecw})

    this.calcgoal()

    this.saveexedata()




}








    render(){

        return(
      <View style={{height:'100%',backgroundColor: '#fff'}} key={this.state.uniqueValue}>
          <ScrollView>





              {this.state.showReal===false ?


                  <View style={{flex:1}}>
                      <View style={{flex:1,backgroundColor:'#ECECEC',height:80}}>


                          <Image style={{flex:1 ,width: undefined, height: undefined,}}
                                 source={require('./Excersises/mainImage/profileimage.png' )}/>
                      </View>




                      <TouchableOpacity  onPress={()=>{this.saveinfo();this.saveprofiledata()}} disabled={this.state.photodisiable} >
                        <View style={{flex:1,flexDirection:'row',marginTop:'17%'}}>

                          <View style={{width:500,marginTop:5,marginLeft:'4%',flex:.6}}>
                              {this.state.photodisiable===false? <View><Text style={{fontSize:20,fontWeight: 'bold',color:'#2F2F2F'}}>Press Here</Text>

                                  <Text style={{fontSize:10,color:'#2F2F2F',fontWeight: 'bold',}}>To load your profile</Text>

                              </View>:<View style={{marginTop:'15%'}}>


                                  <Text style={{fontSize:25,alignItems:'center',color:'#2F2F2F',fontWeight: 'bold',justifyContent:'center'}}>{this.state.profilename}</Text>



                              </View>  }



                          </View>





                         <View style={{flex:.3}}>
                          <View style={{width: 120, height: 120,borderRadius:120/2,borderWidth:3,borderRightColor:'orange',borderLeftColor:'orange',borderTopColor:'orange',borderBottomColor:'orange',justifyContent: 'center', alignItems: 'center',}}>


                                <View>
                                    <Image style={{ width: 125, height: 125,borderRadius:125/2,justifyContent: 'center', alignItems: 'center',}}
                                           source={require('./images/avatar.png')}/>
                                </View>








                          </View>

                                 </View>


                            </View>




                             </TouchableOpacity>



                                <View style={{flex:1,flexDirection:'column',alignSelf:'center',marginTop:'20%'}}>
                                 <View style={{flex:1,alignSelf:'center'}}>
                              <Text style={{fontSize:30,alignItems:'center',color:'#2F2F2F',fontWeight: 'bold',textAlign: 'center'}}>Welcome</Text>

                                 </View>

                                </View>









                                            <View style={{flex:1,height:450,marginTop:'10%'}}>

                                    <Container style={{backgroundColor:'#fff',width:'90%',alignSelf:'center'}}>

                                     <View style={{flex:1}} >
                             <Form>
                                 <ScrollView>

                                     <View style={{height:50,backgroundColor:'#f1f1f1',flex:1}}>


                                         <View style={{ position: 'absolute',bottom:'4.5%',}}>

                                             <Item floatingLabel style={{width:200,}}>

                                                 <Label style={{marginLeft:'1%',fontSize:17}}><Icon name="weight" size={17} color="#837A83" />  WEIGHT</Label>
                                                 <Input
                                                     autoCorrect={false }
                                                     autoCapitalize='none'
                                                     keyboardType="numeric"
                                                     onChangeText={(weight)=>this.setState({weight})}

                                                 />

                                             </Item>
                                         </View>
                                     </View>


                                     <View style={{height:50,backgroundColor:'#f1f1f1',flex:1,marginTop:'5%'}}>


                                         <View style={{ position: 'absolute',bottom:'4.5%',}}>

                                             <Item floatingLabel style={{width:200,}}>

                                                 <Label style={{marginLeft:'1%',fontSize:17}}><Icon name="angle-double-up" size={17} color="#837A83" />  HEIGHT</Label>
                                                 <Input
                                                     autoCorrect={false }
                                                     autoCapitalize='none'
                                                     keyboardType="numeric"
                                                     onChangeText={(height)=>this.setState({height})}

                                                 />

                                             </Item>
                                         </View>
                                     </View>






                                     <View style={{height:50,backgroundColor:'#f1f1f1',flex:1,marginTop:'5%'}}>


                                         <View style={{ position: 'absolute',bottom:'4.5%',}}>

                                             <Item floatingLabel style={{width:200,}}>

                                                 <Label style={{marginLeft:'1%',fontSize:17}}><Icon name="book-reader" size={17} color="#837A83" />  AGE</Label>
                                                 <Input
                                                     autoCorrect={false }
                                                     autoCapitalize='none'
                                                     keyboardType="numeric"
                                                     onChangeText={(age)=>this.setState({age})}

                                                 />

                                             </Item>
                                         </View>
                                     </View>





                                     <View style={{flex:1,flexDirection:'row',height:100,alignSelf:'center',margin:15}}>




                                         {this.state.Disable===true?   <TouchableOpacity
                                                 style={{flex:1,width:200,height:50,backgroundColor:'#949295',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:5,flexDirection:'row'}}  disabled={this.state.Disable}>

                                                 <Text style={{color:'white',fontSize:20}}> Next </Text>
                                             </TouchableOpacity>

                                             :
                                             <TouchableOpacity



                                                 style={{flex:1,width:200,height:50,backgroundColor:'#93ccea',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:5}} onPress={()=>this.savecallinfo()} disabled={this.state.Disable}>
                                                 <Text style={{color:'white'}}>Next</Text>
                                             </TouchableOpacity>

                                         }
                                     </View>

                                 </ScrollView>
                             </Form>
                           </View>

                             {/*<FlatList*/}
                             {/*    data={this.state.data}*/}
                             {/*    keyExtractor={(item,index) => index.toString()}*/}
                             {/*    renderItem={({item}) =>*/}

                             {/*        <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>*/}
                             {/*            <Text style={{color:'#fff', fontWeight:'bold'}}>{item.email}</Text>*/}


                             {/*        </View>*/}

                             {/*    }*/}


                             {/*/>*/}










                         </Container>




                     </View>


                   </View>




                  :




                  <View style={{height:1000,backgroundColor:'#fff'}}>
                      <ScrollView>

                          <View>
                              <View style={{flex:1,backgroundColor:'#ECECEC',height:80}}>


                                  <Image style={{flex:1 ,width: undefined, height: undefined,}}
                                         source={require('./Excersises/mainImage/profileimage.png' )}/>
                              </View>




                              <TouchableOpacity  onPress={()=>{this.saveinfo();}} disabled={this.state.photodisiable} >
                                  <View style={{flex:1,flexDirection:'row',marginTop:'17%'}}>

                                      <View style={{width:500,marginTop:5,marginLeft:'4%',flex:.6}}>
                                          {this.state.photodisiable===false? <View><Text style={{fontSize:20,fontWeight: 'bold',color:'#2F2F2F'}}>Press Here</Text>

                                              <Text style={{fontSize:10,color:'#2F2F2F',fontWeight: 'bold',}}>To load your profile</Text>

                                          </View>:<View style={{marginTop:'15%'}}>


                                              <Text style={{fontSize:25,alignItems:'center',color:'#2F2F2F',fontWeight: 'bold',justifyContent:'center'}}>{this.state.profilename}</Text>



                                          </View>  }



                                      </View>





                                      <View style={{flex:.3}}>
                                          <View style={{width: 130, height: 130,borderRadius:130/2,borderWidth:3,borderRightColor:'orange',borderLeftColor:'orange',borderTopColor:'orange',borderBottomColor:'orange',justifyContent: 'center', alignItems: 'center',}}>




                                              <Image style={{ width: 130, height: 130,borderRadius:130/2,justifyContent: 'center', alignItems: 'center',position:'absolute'}}
                                                                                     source={require('./images/avatar.png')}/>



                                          </View>

                                      </View>


                                  </View>




                              </TouchableOpacity>


                              <ScrollView>



                                  <View style={{height:150,flex:1,margin:15,flexDirection:'row',borderRadius:5,alignSelf:'center'}}>
                                      <LinearGradient colors={['#Fff', '#f1f1f1', '#f2f2f2']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,backgroundColor:'#cbcbcb',margin:15,borderRadius:15,elevation:5}} >

                                        <View style={{flex:1,margin:15,borderRadius:15}}>
                                            <View style={{flex:.5}}>

                                                <Text  style={{fontSize:25,textAlign:'center',color:'#a2a2a2'}}>{this.state.bmi}</Text>
                                            </View>
                                            <View style={{flex:.5,}}>
                                                <Text style={{fontSize:20,textAlign:'center',color:'#a2a2a2'}}>BMI</Text>
                                            </View>
                                        </View>

                                      </LinearGradient>

                                      <LinearGradient colors={['#Fff', '#f1f1f1', '#f2f2f2']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,elevation:5,backgroundColor:'#cbcbcb',margin:15,borderRadius:15}} >

                                          <View style={{flex:1,margin:15,borderRadius:15}}>
                                              <View style={{flex:.5}}>

                                                  <View style={{flexDirection:'row',alignSelf:'center'}}><Text  style={{fontSize:25,textAlign:'center',color:'#a2a2a2',alignSelf:'center'}}>{profilemodule}</Text><Text style={{fontSize:15,textAlign:'center',color:'#a2a2a2'}}>kcal</Text></View>
                                              </View>
                                              <View style={{flex:.5,}}>
                                                  <Text style={{fontSize:20,textAlign:'center',color:'#a2a2a2'}}>Today's Goal</Text>
                                              </View>
                                          </View>

                                      </LinearGradient>

                                  </View>
                                  <View style={{height:150,flex:1,marginLeft:15,marginRight:15,flexDirection:'row',borderRadius:5,alignSelf:'center',}}>
                                      <LinearGradient colors={['#Fff', '#f1f1f1', '#f2f2f2']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,elevation:5,backgroundColor:'#cbcbcb',margin:15,borderRadius:15}} >

                                          <View style={{flex:1,margin:15,borderRadius:15}}>
                                              <View style={{flex:.5}}>

                                                  <View style={{flexDirection:'row',alignSelf:'center'}}><Text  style={{fontSize:25,textAlign:'center',color:'#a2a2a2',alignSelf:'center'}}>{this.state.showprogress}</Text><Text style={{fontSize:15,textAlign:'center',color:'#a2a2a2'}}>kcal</Text></View>
                                              </View>
                                              <View style={{flex:.5,}}>
                                                  <Text style={{fontSize:20,textAlign:'center',color:'#a2a2a2'}}>Goal Achieved</Text>
                                              </View>
                                          </View>

                                      </LinearGradient>

                                      <LinearGradient colors={['#Fff', '#f1f1f1', '#f2f2f2']}   locations={[0,0.4,0.6]} startPoint={{x: 0.0, y: 0.25}} endPoint={{x: 0.5, y: 1.0}} style={{flex:.5,elevation:5,backgroundColor:'#cbcbcb',margin:15,borderRadius:15}} >

                                          <View style={{flex:1,margin:15,borderRadius:15}}>
                                              <View style={{flex:.5}}>

                                                  <Text  style={{fontSize:25,textAlign:'center',color:'#a2a2a2'}}>{this.state.age}</Text>
                                              </View>
                                              <View style={{flex:.5,}}>
                                                  <Text style={{fontSize:20,textAlign:'center',color:'#a2a2a2'}}>AGE</Text>
                                              </View>
                                          </View>

                                      </LinearGradient>

                                  </View>
                              <View style={{flex:1,height:250,backgroundColor:'#fff',margin:20,elevation:7,flexDirection:'row',borderRadius:15,}}>


                                  <View style={{flex:.2,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                                      <Icon name="heart" size={27} color="grey" />
                                  </View>
                                  <View style={{height:'100%',width:1,backgroundColor:'grey'}}></View>
                                  <View style={{flex:.8}}>
                                      <View style={{flexDirection:'column'}}>
                                          <Text style={{textAlign:'center',fontSize:17,margin:5,color:'grey'}}>Exercise You Started Today</Text>
                                          <View style={{width:'90%',height:1,backgroundColor:'grey',alignSelf:'center'}}></View>
                                            <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                                          {this.state.likefe===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Full-Body Easy</Text></View>:
                                              <View></View>}


                                                {this.state.likefi===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Full-Body(Int.)</Text></View>:
                                                    <View></View>}


                                                {this.state.likewe===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>WeightLoss Easy</Text></View>:
                                                    <View></View>}


                                                    {this.state.likewi===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>WeightLoss (Int.)</Text></View>:
                                                <View></View>}
                                                {this.state.likele===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Legs Easy</Text></View>:
                                                    <View></View>}
                                                {this.state.likeli===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Legs (Int.)</Text></View>:
                                                    <View></View>}
                                                {this.state.likeab===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Abs Beginner</Text></View>:
                                                    <View></View>}
                                                {this.state.likeai===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Abs Intermediate</Text></View>:
                                                    <View></View>}
                                                {this.state.likeda===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Daily Awakening</Text></View>:
                                                    <View></View>}
                                                {this.state.likebu===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Butt Buildup</Text></View>:
                                                    <View></View>}
                                                {this.state.likecb===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Chest Booster</Text></View>:
                                                    <View></View>}
                                                {this.state.likecw===1?<View style={{backgroundColor:'#f4f4f4',margin:5,borderRadius:5}}><Text style={{justifyContent:'center',alignItems:'center',padding:10,}}>Core Workout</Text></View>:
                                                    <View></View>}


                                                {this.state.likefe===0&&this.state.likefi===0&&
                                                this.state.likewe===0&&this.state.likewe===0&&
                                                this.state.likewi===0&&this.state.likele===0&&this.state.likeab===0&&
                                                this.state.likeai===0&&this.state.likeda===0&&this.state.likebu===0&&
                                                this.state.likecb===0&&this.state.likecw===0?<View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',flex:1,height:'100%',marginTop:'13%'}}><Text style={{justifyContent:'center',alignItems:'center',color:'grey',textAlign:'center'}}>No Exercise Is Yet Started</Text></View>:<View/>}








                                      </View>

                                  </View>



</View>



                              </View>


                              </ScrollView>
            </View>

                    </ScrollView>

                  </View> }


          </ScrollView>
      </View>


        )
    }
}


//
// const RootStack = createStackNavigator(
//     {
//         Home:Profile,
//
//
//
//
//     },
//     {
//         headerMode:'none',
//         navigationOptions: {
//             header:null
//         },
//
//         initialRouteName:'Home'
//     }
//
//
// );
//
// const AppContainer = createAppContainer(RootStack);
//
// export default class App extends React.Component {
//     render() {
//         return <AppContainer />;
//
//     }
// }
//
