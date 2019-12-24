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
    TouchableOpacity, AsyncStorage, TouchableHighlight
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Storage from 'react-native-storage';
import {BoxShadow} from 'react-native-shadow'

import {Container,Content,Header,Form,Input,Item,Label} from "native-base";
import {GoogleSigninButton} from "react-native-google-signin";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";


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
               loading: true,weight:0,
            height:0,
            age:0,
            bmi:'',
            Disable:true,
            data:[],
            fetchshow:true,
            actualname:'',
            tocall:0,
            photodisable:false,
            showmaindesign:true,
            ndata:[],
            uniqueValue:1,
            picurl:'',
            profilename:'',
            email:''

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
        console.log('inside savecallinfo')
        storage.save({
            key: 'callinfo', // Note: Do not use underscore("_") in key!
            data: {

                showReal:true,
                weight:this.state.weight,
                height:this.state.height,
                bmi:this.state.bmi,

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
                photodisable: true,
                photo:this.props.picurl,
                profilename:this.props.profilename,
                email:this.props.email
            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: null
        })
        console.log('aaaaaa' + this.props.pic)

    }






     getdata=()=>{
         console.log('inside getinfo')

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
                 this.setState({photodisable:ret.photodisable})
                 this.setState({picurl:ret.photo,profilename:ret.profilename})
                 console.log('aaaaaayyyyyyyyy'+ret.photo)
                 console.log('aa'+ret.isvalue)

                 console.log('aaaaaay'+this.state.actualname)
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


         this.fetchData()




     }

    getcalldata=()=> {
        console.log('inside getcallinfo')

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
                console.log(ret.showReal);
                this.setState({showReal: ret.showReal})
                 this.setState({bmi:ret.bmi,height:ret.height,weight:ret.weight})
                console.log('getcallinfo' + ret.showReal)
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










    fetchinfo= async()=>{
        const Email = this.state.actualname.split('@')[0].trim()

        const response = await fetch('http://10.0.2.2:3000/'+Email);
        const users = await response.json()
        this.setState({ndata:users});
        console.log('inside fetchinfo')

    }



    fetchData= ()=>{
        const Email = this.state.actualname.split('@')[0].trim()

        console.log('fetchdata'+Email)
        fetch('http://10.0.2.2:3000/profileinfo/'+Email,{
            method:'GET'
        }).then((response)=>{
            return response.json();

        }).then((users)=>{
            this.setState({data:users});

        })




    }



    // calcbmi=()=>{
    //
    //
    // }


    setuserdata=()=>{




        const Email = this.state.actualname.split('@')[0].trim()
        console.log('setuserdata')

console.log(this.state.bmi)

        fetch('http://10.0.2.2:3000/'+Email, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
            },


            body:JSON.stringify({weight:this.state.weight,height:this.state.height,age:this.state.age,bmi:this.state.bmi})

        }).then((response)=>{
            return response.json()


        }).then((jsondata)=>{
            this.setState({data:jsondata})
        }).done()




    }


    componentDidMount() {
        AsyncStorage.getItem('first_time').then((value) => {
            this.setState({ showReal: !!value, loading: false,});


        });

        this.changetime()
        // this.fetchinfo()




            let myinterval = setInterval(() => {
                    this.getdata()
                    this.fetchData()
                    this.getcalldata()
                    this.fetchinfo()

                },

                1000);


    }

componentWillMount(): void {
    this.getcalldata()
    this.fetchData()
    this.getdata()

}








    render(){

        return(
      <View style={{height:700,backgroundColor: '#fff'}} key={this.state.uniqueValue}>
          <ScrollView>











              {this.state.showReal===false ?


                  <View>
                      <View style={{flex:1,backgroundColor:'#ECECEC',height:200}}>


                          <Image style={{flex:1 ,width: undefined, height: undefined,}}
                                 source={require('./Excersises/mainImage/profileimage.png' )}/>
                      </View>




                      <TouchableOpacity style={{flex:1,width:100,
                          backgroundColor:'#C7C7C7',height:100,
                          borderRadius:50,marginLeft:'5%',zIndex:5,marginTop:'-10%',}}  onPress={()=>{this.saveinfo();this.fetchData();}} disabled={this.state.photodisiable} >



                          <Image style={{flex:1,width:100, height: 100,borderRadius:50,position:'absolute'}}
                                 source={{uri:this.state.picurl}}/>

                          <View style={{width:500,marginTop:45,marginLeft:'105%'}}>
                              {this.state.photodisiable===false?<View><Text style={{fontSize:25,fontWeight: 'bold',color:'#2F2F2F'}}>  Click here</Text>

                                  <Text style={{fontSize:20,color:'#2F2F2F',fontWeight: 'bold',}}>   To load your profile</Text>

                              </View>:<View></View>}


                          </View>
                      </TouchableOpacity>

                      <View style={{marginTop:25,marginLeft:'5%',bottom:0}}>

                          <View>
                              <Text style={{fontSize:25,alignItems:'center',color:'#2F2F2F',fontWeight: 'bold'}}>Welcome</Text>

                              <Text style={{fontSize:25,alignItems:'center',color:'#2F2F2F',fontWeight: 'bold'}}>{this.state.profilename}</Text>
                          </View>


                      </View>








                     <View style={{flex:1,height:700,marginTop:'10%'}}>

                         <Container style={{backgroundColor:'#fff',width:'90%',alignSelf:'center'}}>

                           <View >
                             <Form>
                                 <ScrollView>

                                     <View style={{flex:1,flexDirection:'row',}}>
                                     <View style={{height:200,flex:.5,backgroundColor:'#00bcd4',borderRadius:10,margin:15,}}>
                                         <Image style={{height:150,width:230,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/weightmachine.png')}/>


                                             <View style={{ position: 'absolute',
                                    bottom: 20,}}>

                                 <Item floatingLabel style={{width:130,marginLeft:'13%',}}>

                                     <Label style={{marginLeft:'1%',fontSize:17,color:'#fff'}}><Icon name="weight" size={17} color="#fff" />  WEIGHT</Label>
                                     <Input
                                         autoCorrect={false }
                                         autoCapitalize='none'
                                         keyboardType="numeric"
                                         onChangeText={(weight)=>this.setState({weight})}

                                     />

                                 </Item>
                                </View>
                                     </View>

                                     <View style={{height:200,width:300,flex:.5,backgroundColor:'#03a9f4',borderRadius:10,margin:15,marginTop:55}}>
                                         <Image style={{height:150,width:165,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/age.png')}/>


                                         <View style={{ position: 'absolute',
                                             bottom: 20,}}>

                                             <Item floatingLabel style={{width:130,marginLeft:'13%',}}>
                                     <Label style={{color:'#fff'}}><Icon name="magento" size={17} color="#fff" />  AGE </Label>

                                     <Input
                                         autoCorrect={false }
                                         keyboardType="numeric"

                                         autoCapitalize='none'
                                         onChangeText={(age)=>this.setState({age})}

                                     />

                                 </Item>
                                         </View>
                                     </View>
                                     </View>


                                     <View style={{flex:1,flexDirection:'row',}}>

                                     <View style={{height:200,width:100,backgroundColor:'#03a9f4',borderRadius:10,margin:15,flex:1,marginTop:-15}}>
                                         <Image style={{height:150,width:230,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/height.png')}/>


                                         <View style={{ position: 'absolute',
                                             bottom: 20,}}>

                                             <Item floatingLabel style={{width:130,marginLeft:'13%',}}>
                                     <Label style={{color:'white'}}><Icon name="angle-double-up" size={17} color="#fff" />  HEIGHT</Label>
                                     <Input
                                         autoCorrect={false }
                                         keyboardType="numeric"
                                         autoCapitalize='none'
                                         onChangeText={(height)=>this.setState({height})}

                                     />
                                 </Item>
                                     </View>
                                     </View>





                                         <View style={{height:200,width:300,backgroundColor:'#00bcd4',borderRadius:10,margin:15,flex:1,}}>
                                             <Image style={{height:130,width:120,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/clock.png')}/>


                                             <View style={{ position: 'absolute',
                                                 bottom: 20,}}>

                                                 <Item floatingLabel style={{width:130,marginLeft:'13%',}}>
                                                     <Label style={{color:'#fff'}}><Icon name="hourglass" size={17} color="#fff" />  HOURS</Label>
                                                     <Input
                                                         autoCorrect={false }
                                                         keyboardType="numeric"
                                                         autoCapitalize='none'

                                                     />
                                                 </Item>
                                             </View>
                                         </View>







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









                             <View style={{flex:1,flexDirection:'row',height:100,alignSelf:'center',margin:15}}>




                                 {this.state.Disable===true?   <TouchableOpacity
                                         style={{flex:1,width:200,height:50,backgroundColor:'#949295',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:5,flexDirection:'row'}} onPress={()=>this.calcbmi()} disabled={this.state.Disable}>
                                         <Icon name="creative-commons-pd" size={20} color="#fff" />

                                         <Text style={{color:'white',fontSize:20}}>  Please Fill </Text>
                                     </TouchableOpacity>

                                     :
                                     <TouchableOpacity



                                         style={{flex:1,width:200,height:50,backgroundColor:'#93ccea',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:5}} onPress={()=>{this.setuserdata();this.savecallinfo()}} disabled={this.state.Disable}>
                                         <Text style={{color:'white'}}>Submit</Text>
                                     </TouchableOpacity>

                                 }
                             </View>

                         </Container>




                     </View>


                   </View>




                  :




                  <View style={{height:'100%',backgroundColor:'#fff'}}>
                      <ScrollView>


<View style={{flex:1,flexDirection:'row',}}>
                          <View style={{height:250,borderRadius:75,marginTop:'-10%',marginLeft:'-10%'}}>

                              <View style={{width:235,backgroundColor:'#4CC7BB',height:235,borderRadius:127,  justifyContent: 'center', alignItems: 'center'}}>
                                  <View style={{width:200,backgroundColor:'#625A96',height:200,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
                                      <View style={{width:160,backgroundColor:'#413F66',height:160,borderRadius:80,  justifyContent: 'center', alignItems: 'center'}}>
                                          <Image  source={{uri:this.state.picurl}} style={{ width: 120, height: 120,borderRadius:60,}}/>

                                      </View>
                                  </View>
                              </View>



                          </View>
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}>{this.state.bmi}</Text>
        <Text style={{marginLeft:'12%',fontSize:15,}}>Bmi</Text>
    </View>


</View>


                          <View style={{flex:1,flexDirection:'row',}}>

                              <View style={{flex:.3}}>

                              </View>
                             <View style={{flex:.7}}>
                                 <Text style={{fontWeight:'bold',fontSize:25}}>{this.state.profilename}</Text>
                                <View style={{backgroundColor:'grey',height:1,flex:.7,marginTop:15}}></View>
                             </View>
                          </View>


<View style={{backgroundColor:'lavender',margin:15,borderTopLeftRadius:145,borderBottomRightRadius:145}}>

<ScrollView>

                          <View style={{flex:1,flexDirection:'row',borderWidth:3,margin:15,borderRadius:15,borderColor:'#BBBBBB'}}>


                              <View style={{height:100,width:100,backgroundColor:'transparent',borderRadius:50,marginLeft:'5%',margin:5,borderLeftColor:'#39CB41',borderRightColor:'#39CB41',borderTopColor:'#39CB41',borderBottomColor: '#fff',borderWidth:3}}>

                                <Image  source={require('./images/weightlogo.png')} style={{flex:1 , width: undefined, height: undefined,borderRadius:50}}/>

                              </View>

                              <View style={{flexDirection:'column'}}>


                                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:'5%'}}>Your Weight Is</Text>
                            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{this.state.weight}</Text>

                              </View>

                          </View>


                          <View style={{flex:1,flexDirection:'row',borderWidth:3,margin:15,borderRadius:15,borderColor:'#BBBBBB'}}>


                              <View style={{height:100,width:100,backgroundColor:'#E4E4E4',borderRadius:50,marginLeft:'5%',margin:5,borderLeftColor:'#CB9047',borderRightColor:'#CB9047',borderTopColor:'#CB9047',borderBottomColor: '#fff',borderWidth:3}}>

                                  <Image  source={require('./images/heightlogo.png')} style={{flex:1 , width: undefined, height: undefined,borderRadius:50}}/>


                              </View>


<View style={{flexDirection:'column'}}>
                                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:'5%'}}>Your Height Is</Text>
                                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{this.state.height}</Text>

</View>





                          </View>

                          <View style={{flex:1,flexDirection:'row',borderWidth:3,margin:15,borderRadius:15,borderColor:'#BBBBBB'}}>


                              <View style={{height:100,width:100,backgroundColor:'#E4E4E4',borderRadius:50,marginLeft:'5%',margin:5,borderLeftColor:'#CB8BBC',borderRightColor:'#CB8BBC',borderTopColor:'#CB8BBC',borderBottomColor: '#fff',borderWidth:3}}>

                                  <Image  source={require('./images/agelogo.png')} style={{flex:1 , width: undefined, height: undefined,borderRadius:50}}/>


                              </View>

                              <View style={{flexDirection:'column'}}>


                                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:'5%'}}>Your Age</Text>
                                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,}}>{this.state.age}</Text>
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
