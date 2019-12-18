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

import {Container,Content,Header,Form,Input,Item,Label} from "native-base";
import {GoogleSigninButton} from "react-native-google-signin";
import App from "./App";


const storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

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
            showReal: true,
               loading: true,weight:'',
            height:'',
            age:'',
            bmi:'',
            Disable:true,
            data:[],
            fetchshow:true,
            actualname:'',
            tocall:0,
            photodisiable:false

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


            },



            1000);


    }
















    saveinfo=()=>{
         console.log('inside saveinfo')
        this.setState({photodisiable:true})

        storage.save({
             key: 'loginState', // Note: Do not use underscore("_") in key!
             data: {

                 isvalue: this.props.pic,
                 photodisable:this.state.photodisiable
             },

             // if expires not specified, the defaultExpires will be applied instead.
             // if set to null, then it will never expire.
             expires:null
         })
         console.log('aaaaaa'+this.props.pic)


     }

    savecallinfo=()=>{
        console.log('inside savecallinfo')
        storage.save({
            key: 'callinfo', // Note: Do not use underscore("_") in key!
            data: {

                tocall:1
            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires:null
        })

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
                 console.log('aaaaaayyyyyyyyy'+ret.isvalue)
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
                console.log(ret.tocall);
                this.setState({tocall: ret.tocall+1})
                this.setState({photo: ret.tocall+1})

                console.log('getcallinfo' + ret.tocall)
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
        const response = await fetch('http://10.0.2.2:3000/fetchinfo/');
        const users = await response.json()




    }



    fetchData= async()=>{
        const Email = this.state.actualname.split('@')[0].trim()

        console.log('fetchdata'+Email)
        const response = await fetch('http://10.0.2.2:3000/profileinfo/'+Email);
        const users = await response.json();
        this.setState({data:users});



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



                },

                1000);


    }





    calcbmi=()=>{

    const c = (this.state.weight)/(this.state.height/100)**2
       this.setState({bmi:c.toFixed(2)})
}





    render(){

        return(
      <View style={{height:'100%',backgroundColor: '#fff'}}>
          <ScrollView>
          <View style={{flex:1,backgroundColor:'#E9E9E9',height:200}}>


              <Image style={{flex:1 ,width: undefined, height: undefined,}}
                     source={require('./Excersises/mainImage/profileimage.png' )}/>
          </View>


              <TouchableOpacity style={{flex:1,width:100,
                  backgroundColor:'#C7C7C7',height:80,
                  borderRadius:100/2,marginLeft:'5%',zIndex:5,marginTop:'-10%'}}  onPress={()=>this.saveinfo()} disabled={this.state.photodisiable} >




                  {this.state.data.map((item)=>{
                      var image=item.photo
                      return(
<View>
    <Text style={{textAlign: 'center',fontSize:15,alignItems:'center',alignSelf:'center'}}>Click me</Text>

                          <Image style={{flex:1 ,width:100, height: 100,borderRadius:10,position:'absolute'}}
                                 source={{uri:image}}/>

</View>

                      )
                  })}





              </TouchableOpacity>
<View style={{marginTop:25,marginLeft:'5%',bottom:0}}>
              {this.state.data.map((item)=>{
                  var name=item.name
                  return(
                      <View>

                          <Text style={{fontSize:25,alignItems:'center',color:'grey',fontWeight: 'bold'}}>{name}</Text>
                      </View>

                  )
              })}
</View>
              {this.state.showReal===true ?


                  <View>

                     <View style={{flex:1,height:600,marginTop:'10%'}}>

                         <Container style={{backgroundColor:'#fff',}}>

                           <View style={{flex:1,flexDirection:'row'}}>
                             <Form>
                                 <ScrollView horizontal={true}>
                                     <View style={{height:200,width:300,backgroundColor:'#DAD6D8',borderRadius:30,margin:15,flex:1}}>
                                         <Image style={{height:150,width:230,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/weightmachine.png')}/>


                                             <View style={{ position: 'absolute',
                                    bottom: 20,}}>

                                 <Item floatingLabel style={{width:200,marginLeft:'13%',}}>

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

                                     <View style={{height:200,width:300,backgroundColor:'#DAD6D8',borderRadius:30,margin:15,flex:1}}>
                                         <Image style={{height:150,width:195,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/age.png')}/>


                                         <View style={{ position: 'absolute',
                                             bottom: 20,}}>

                                             <Item floatingLabel style={{width:200,marginLeft:'13%',}}>
                                     <Label><Icon name="magento" size={17} color="#837A83" />  AGE </Label>

                                     <Input
                                         autoCorrect={false }
                                         keyboardType="numeric"

                                         autoCapitalize='none'
                                         onChangeText={(height)=>this.setState({height})}

                                     />

                                 </Item>
                                     </View>
                                     </View>
                                     <View style={{height:200,width:300,backgroundColor:'#DAD6D8',borderRadius:30,margin:15,flex:1}}>
                                         <Image style={{height:150,width:230,alignItems:'center',alignSelf:'center',justifyContent:'center'}} source={require('./images/height.png')}/>


                                         <View style={{ position: 'absolute',
                                             bottom: 20,}}>

                                             <Item floatingLabel style={{width:200,marginLeft:'13%',}}>
                                     <Label><Icon name="angle-double-up" size={17} color="#837A83" />  HEIGHT</Label>
                                     <Input
                                         autoCorrect={false }
                                         keyboardType="numeric"
                                         autoCapitalize='none'
                                         onChangeText={(height)=>this.setState({height})}

                                     />
                                 </Item>
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







                             {this.state.bmi!=='' ? <Text style={{marginLeft:'8%',fontSize:20,color:'grey',}}>Your Body Mass Index Is :-</Text>: <View><Text style={{marginLeft:'8%',fontSize:20,color:'grey',}}>Please fill above feilds!! </Text></View>
                             }
                                 <Text style={{marginLeft:'8%',fontSize:20,color:'grey'}}>{this.state.bmi}</Text>



                             <View style={{flex:1,flexDirection:'row',height:10,}}>

                                 {this.state.Disable===true?   <TouchableOpacity
                                         style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#848285',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15,flexDirection:'row'}} onPress={()=>this.calcbmi()} disabled={this.state.Disable}>
                                         <Icon name="creative-commons-pd" size={15} color="black" />
                                         <Text>Your BMI</Text>
                                 </TouchableOpacity>

                                 :
                                     <TouchableOpacity



                                         style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#4BB543',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.calcbmi()} disabled={this.state.Disable}>
                                         <Text>Your BMI</Text>
                                     </TouchableOpacity>

                                 }



                                 {this.state.Disable===true?   <TouchableOpacity
                                         style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#848285',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15,flexDirection:'row'}} onPress={()=>this.calcbmi()} disabled={this.state.Disable}>
                                         <Icon name="creative-commons-pd" size={15} color="black" />

                                         <Text>  Submit</Text>
                                     </TouchableOpacity>

                                     :
                                     <TouchableOpacity



                                         style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#93ccea',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.savebutton()} disabled={this.state.Disable}>
                                         <Text>Submit</Text>
                                     </TouchableOpacity>

                                 }
                             </View>

                         </Container>




                     </View>


                   </View>




                  :




                  <View>




                  </View> }


          </ScrollView>
      </View>


        )
    }
}