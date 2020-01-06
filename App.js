import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
FlatList,
  TouchableHighlight,

  ImageBackground
  , Button, StyleSheet, AsyncStorage,
  ScrollView, BackHandler,
    SafeAreaView
} from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'react-native-firebase';

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Container,Content,Header,Form,Input,Item,Label} from "native-base";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,

} from 'react-native-google-signin';
import HomePage from "./HomePage";
import Profile from "./profile";
import Icon from "react-native-vector-icons/AntDesign";


// var Firebase = require('firebase')

const BASE_URL='db4free.net'



export class PhoneAuthTest extends React.Component {
  static navigationOptions = {
    header: null,
    headerVisible: false,
    headerMode: 'none',

  }


  constructor(props) {

    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+91',
      confirmResult: null,
      email: '',
      password: '',
      userInfo: '',
      showRealApp:false,
      isVisible : true,
      loading:true,
      data:[],
      picname:'',
      picurl:'',
      profilename:'',
      showdefault:0,
      signup:true



    };
  }


  loginuser=(email,password)=>{

    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {


      }).then((data)=>{

      })
    }
    catch (e) {
      console.log(e.toString())
    }

  }
  signupuser=(email,password)=>{
    try{
      if(this.state.password.length<6){
        alert('6 character altest')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
          .then((data)=>{
            this.savebutton()
          })

    }
    catch (e) {
      console.log(e.toString())
    }
  }
  Hide_Splash_Screen=()=>{

    this.setState({
      isVisible : false

    });

  }


  gotoNextActivity = () => {
    this.props.navigation.navigate('Forth');

  }

  fetchData= async()=>{
    const response = await fetch('http://10.0.2.2:3000/');
    const users = await response.json();
    this.setState({data: users});

  }


    componentDidMount() {
    // let props = this.props;

    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        this.setState({
          user:"Your are successfully logged in"
        })




      } else {
        // User has been signed out, reset the state

        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+91',
          confirmResult: null,
          userInfo: '',



        });
      }
    });
    {
      GoogleSignin.configure({
        //It is mandatory to call this method before attempting to call signIn()
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        // Repleace with your webClientId generated from Firebase console
        webClientId:
            '488038246568-aimho25uljsj9s9st588rahff0pce6kv.apps.googleusercontent.com',
      });
    }


    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false, });

    });

        this.setState({picname:this.state.picname},()=>{
          AsyncStorage.setItem('picname', this.state.picname);
        })


    var that = this;

    setTimeout(function(){

      that.Hide_Splash_Screen();

    }, 2000);




      let myinterval = setInterval(() => {
            this.getinfodata()


          },

          1000);



  }




  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.navigate('Apps');
    this.setState({step:0})
    if(this.state.step>=0){
      this.setState({step:0})

    }

    return true;
  };




  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;

    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
        .then(confirmResult =>this.setState({ confirmResult, message: 'Code has been sent!' }))
        .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
          .then((user) => {
            this.setState({ message: 'Code Confirmed!' });
          })
          .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };






  onLoginOrRegister = () => {
    GoogleSignin.signIn()
        .then((data) => {
          // Create a new Firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
          // Login with the credential
          const veri=firebase.auth.GoogleAuthProvider.credential(data.user)

         // alert(JSON.stringify(veri))
          // this.savebutton(data.user.email)
          this.setState({picname:data.user.email})
          this.setState({picurl:JSON.stringify(data.user.photo),profilename:data.user.name})

          // this.profileneed(data.user.email)
          // this.profilefetch(data.user.photo,data.user.name,data.user.email)
          //
          // this.profilebutton(data.user.photo,data.user.name,data.user.email)

          this.setState({showdefault:1})
          this.saveinfo()


          return firebase.auth().signInWithCredential(credential);

        })

        .then((users) => {


  })
  }


  saveinfo=()=>{
    storage.save({
      key: 'show', // Note: Do not use underscore("_") in key!
      data: {


        showdefault:this.state.showdefault


      },

      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires:null
    })

  }





  getinfodata=()=>{

    storage
        .load({
          key: 'show',


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

          this.setState({showdefault:ret.showdefault})


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



















//   profileneed=(email)=>{
//
//
//
//     const emai = email.split('@')[0].trim()
//
// console.log(emai)
//
//     fetch('profileinfo:3306/'+emai, {
//       method: 'GET',
//
//
//
//     }).then((response)=>{
//       return response.json()
//
//
//     }).then((jsondata)=>{
//       this.setState({data:jsondata})
//     }).done()
//   }
//
//
//










  //
  // savebutton=(email)=>{
  //
  //
  //
  //   const Email = email.split('@')[0].trim()
  //
  //
  //
  //   fetch('db4free.net:3306/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
  //       'Content-Type': 'application/json'
  //     },
  //
  //
  //   body:JSON.stringify({user:Email})
  //
  //   }).then((response)=>{
  //         return response.json()
  //
  //
  //       }).then((jsondata)=>{
  //          this.setState({data:jsondata})
  //   }).done()
  // }
  //
  //
  //
  //
  //
  //
  //




  //
  // profilebutton=(photo,names,email)=>{
  //
  //
  //
  //   const Email = email.split('@')[0].trim()
  //
  //
  //
  //   fetch('db4free.net:3306/profileinfo', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
  //       'Content-Type': 'application/json'
  //     },
  //
  //
  //     body:JSON.stringify({photo:photo,name:names,user:Email})
  //
  //   }).then((response)=>{
  //     return response.json()
  //
  //
  //   }).then((jsondata)=>{
  //     this.setState({data:jsondata})
  //   }).done()
  // }
  //
  //
  //
  // profilefetch=(photo,names,email)=>{
  //
  //
  //
  //   const emails = email.split('@')[0].trim()
  //
  //
  //
  //   fetch(BASE_URL+'/profileinfo/'+emails, {
  //     method: 'GET',
  //
  //
  //
  //   }).then((response)=>{
  //     return response.json()
  //
  //
  //   }).then((jsondata)=>{
  //     this.setState({data:jsondata})
  //   }).done()
  // }






  _signOut = async () => {
    //Remove user session from the device..token
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  _revokeAccess = async () => {
    //Remove your application from the user authorized applications.
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };



  _loggedin=()=>
  {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
      this.props.navigation.navigate('Appintro');
    });
  }





  sigupshow=()=>{

    this.setState({signup:false})


  }



  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;
    const {email,password}=this.state;
    const {userInfo}=this.state;

    return (


          <ScrollView>
              <View style={{justifyContent:'center',height:'100%',width:'100%',alignSelf:'center',alignItems:'center',backgroundColor:'#f1f1f1'}}>


<View  style={{height:300,width:'100%',backgroundColor:'#f1f1f1'}}>

  <Image source={require('./Excersises/mainImage/first.gif')} style={{flex:1,height:undefined,width:undefined}}/>
</View>





<View style={{height:600,borderColor:'#fff',justifyContent:'center',alignSelf:'center',alignItems:'center'}}>


      <View style={{  height:300,width:300 }} >
        <Container style={{backgroundColor:'#f1f1f1'}}>




          <Text style={{fontSize:25,color:'grey',margin:15}}>Daily Fitness</Text>
          <Text  style={{fontSize:15,color:'grey',margin:10}}>Daily Fitness provides you with exercise to regulate daily schedule</Text>
        <Form>
          {/*<Item floatingLabel>*/}
          {/*  <Label>Email</Label>*/}
          {/*  <Input*/}
          {/*  autoCorrect={false }*/}
          {/*  autoCapitalize='none'*/}
          {/*  onChangeText={(email)=>this.setState({email})}*/}

          {/*  />*/}
          {/*</Item>*/}

          {/*<Item floatingLabel>*/}
          {/*  <Label>Password</Label>*/}
          {/*  <Input*/}
          {/*      secureTextEntry={true}*/}
          {/*      autoCorrect={false }*/}
          {/*      autoCapitalize='none'*/}
          {/*      onChangeText={(password)=>this.setState({password})}*/}

          {/*  />*/}
          {/*</Item>*/}



        </Form>
{/*          {this.state.signup===true?*/}

{/*              <View style={{flex:1,flexDirection:'row',}}>*/}
{/*                <TouchableHighlight style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#4BB543',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.loginuser(this.state.email,this.state.password)}>*/}
{/*                  <Text>LOGIN</Text>*/}
{/*                </TouchableHighlight>*/}
{/*                <TouchableHighlight style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#93ccea',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.sigupshow()}>*/}
{/*                  <Text>Signup</Text>*/}
{/*                </TouchableHighlight>*/}
{/*              </View>*/}
{/*:*/}
{/*              <View style={{flex:1,flexDirection:'row',}}>*/}


{/*              <TouchableHighlight style={{flex:1,height:50,margin:5,backgroundColor:'#93ccea',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.signupuser(this.state.email,this.state.password)}>*/}
{/*                <Text>Signup</Text>*/}
{/*              </TouchableHighlight>*/}
{/*                <TouchableHighlight style={{flex:.5,width:200,height:50,margin:5,backgroundColor:'#4BB543',alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:15}} onPress={()=>this.loginuser(this.state.email,this.state.password)}>*/}
{/*                  <Text>LOGIN</Text>*/}
{/*                </TouchableHighlight>*/}
{/*              </View>*/}



{/*          }*/}









          <GoogleSigninButton
              style={{ width:255, height: 48,alignSelf:'center',marginTop: 15 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this.onLoginOrRegister}
          />
        </Container>






      </View>

{/*<View style={{width:'100%',}} >*/}


{/*          <Collapse style={{padding:25,justifyContent:'center',alignSelf:'center',alignItems:'center',width:'100%',}}>*/}
{/*            <CollapseHeader style={{width:300,height:50,}}>*/}
{/*              <View>*/}
{/*                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:20,padding:15,fontSize: 15,fontFamily:'algerian',color: '#111'}}>PHONE ACTIVATION</Text>*/}
{/*              </View>*/}
{/*            </CollapseHeader>*/}
{/*            <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>*/}
{/*              <View style={{ height:500}}>*/}

{/*                <Text style={{color:'#fff'}}>Enter phone number:</Text>*/}
{/*                <TextInput*/}
{/*                    autoFocus*/}
{/*                    style={{ height: 40, marginTop: 15, marginBottom: 15 ,color:'#111'}}*/}
{/*                    onChangeText={value => this.setState({ phoneNumber: value })}*/}
{/*                    placeholder={'Phone number ... '}*/}
{/*                    keyboardType = 'numeric'*/}
{/*                    value={phoneNumber}*/}
{/*                />*/}
{/*                <Button title="Sign In" color="#59A45C" onPress={this.signIn} />*/}
{/*              </View>*/}
{/*            </CollapseBody>*/}
{/*          </Collapse>*/}
{/*</View>*/}
              </View>
              </View>
</ScrollView>










    )

  }



  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
        <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;


    return (
        <View style={{ padding: 25,backgroundColor:'#000',height:'100%',alignItems:'center',justifyContent:'center' }}>

          {/*<Image source={require('./Excersises/gifs/loading.gif')}*/}
          {/*       style={{flexDirection: 'column',*/}
          {/*         justifyContent: 'center',*/}
          {/*         alignItems: 'center',*/}
          {/*         height: '60%',borderRadius:15,width:'100%'}}/>*/}

          <Text style={{color:'#fff'}}>Enter verification code below:</Text>
          <TextInput
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15,color:'#fff' }}
              onChangeText={value => this.setState({ codeInput: value })}
              placeholder={'Code ... '}
              value={codeInput}
          />
          <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
        </View>
    );
  }




  Handlenext=()=>{

    this.props.navigation.navigate('Appintro',{verification:this.state.picname})


  }








  render() {
    const { user, confirmResult } = this.state;


    let Splash_Screen = (

        <View style={styles.SplashScreen_RootView}>

          <View style={styles.SplashScreen_ChildView}>

            {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

            <Image source={require('./images/fitness.png')}
                   style={{width:'100%', height: '100%', resizeMode: 'contain'}} />

          </View>





        </View> )


    if(this.state.isVisible===true)
    {
      return (
          <View style = { {flex:1,height:1000} }>



            {
              (this.state.isVisible === true) ? Splash_Screen : Splash_Screen
            }


          </View>
      )
    }
    if(!this.state.showRealApp)
    {


      return (


          <View style={{ flex:1,height:1000 }}>


            {!user && !confirmResult && this.renderPhoneNumberInput()}

            {this.renderMessage()}

            {!user && confirmResult && this.renderVerificationCodeInput()}
           {user && (


                <View  style={{flex:1,}}>


                  <Profile pic={this.state.picname} picurl={this.state.picurl} profilename={this.state.profilename} email={this.state.email} showdefault={this.state.showdefault} />





                  <TouchableHighlight  style={{position:'absolute', margin:15,right:0,bottom:'10%',backgroundColor:'red'}}>
                    <Button title="next" color="#59A45C" onPress={()=>this.Handlenext()}/>

                  </TouchableHighlight>

                  </View>







            )}


          </View>
      );
    }
    else {
      return (
          <View>
          {this.props.navigation.navigate('Home')}

          </View>
      )
    }


  }


}







export  class Appintro extends React.Component {
  static navigationOptions = {
    header: null,

  }
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }











  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
    this.props.navigation.navigate('Home',{ver:this.props.navigation.state.params.verification})

  })
  }




  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });


    this.props.navigation.navigate('Home')
  })
  }

  _renderNextButton = () => {
    return (
        <View style={styles.buttonCircle}>
          <Icon name="doubleright" size={17} color="black" />
        </View>
    );
  };
  _renderDoneButton = () => {
    return (
        <View style={styles.buttonCircle}>
          <Icon name="check" size={17} color="black" />
        </View>
    );
  };

  _renderskipButton=()=>{
    return (
        <View style={styles.buttonCircle}>
          <Icon name="stepforward" size={17} color="black" />
        </View>

  )
  }


  render() {const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com"
  };
    firebase.initializeApp(config);
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
          <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 50,
              }}>
            <Text>

            </Text>
          </View>
      );
    } else {
      //Intro slides
      return (
          <AppIntroSlider
              style={{backgroundColor:'#f3f3f3',color:'#111'}}
              slides={slides1}
              //comming from the JsonArray below
              onDone={()=>this._onDone()}
              //Handler for the done On last slide
              showSkipButton={true}
              onSkip={()=>this._onSkip()}
              renderSkipButton={this._renderskipButton}
              renderDoneButton={this._renderDoneButton}
              renderNextButton={this._renderNextButton}


          />

      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,





  },
  text: {
    color: '#111',
    fontSize: 20,
    padding:15,justifyContent:'center',alignSelf:'center',alignItems:'center',

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
    backgroundColor: 'transparent',
    padding:15,

  },
  MainContainer:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:  20,

      },

  SplashScreen_RootView:
      {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',

      },

  SplashScreen_ChildView:
      {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex:1,
        margin: 20,
      },

  TouchableOpacity_Style:{

    width:25,
    height: 25,
    top:9,
    right:9,
    position: 'absolute'

  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#C3C3C3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

});






const slides1 = [
  {
    key: 's1',
    text: 'Best Exercise offers here!!!',
    title: 'Fitness Guide',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
          'https://media.giphy.com/media/X7Zcr8yp7B6issioEp/giphy.gif'        },
    imageStyle: styles.image,


      justifyContent:"flex-start",

      alignSelf: 'center',


  },
  {
    key: 's2',
    title: 'We will Guide you!',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'Enjoy all of our services',
    image: {
      uri: 'https://media.giphy.com/media/xUA7bbcVDWik6cPdmg/giphy.gif'},
    imageStyle: styles.image,
    justifyContent:"flex-start",

    alignSelf: 'center',

    },





  {
    key: 's3',
    title: 'Free services',
    titleStyle: styles.title,
    textStyle: styles.text,
    text: 'We are here for you',
    image: {
      uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/0b995740400159.577dcf345ee61.gif'},
    imageStyle: styles.image,
    justifyContent:"flex-start",

    alignSelf: 'center',

  },

];




const RootStack = createStackNavigator(
    {
      Apps:PhoneAuthTest,
      Appintro:Appintro,
       Home:{screen:HomePage},




    },
    {
      headerMode:'none',
      navigationOptions: {
        header:null
      },

      initialRouteName:'Apps'
    }


);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;

  }
}
