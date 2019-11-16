import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,

  TouchableHighlight,

  ImageBackground
  , Button, StyleSheet, AsyncStorage,
    ScrollView,
} from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'react-native-firebase';

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,

} from 'react-native-google-signin';
import HomePage from "./HomePage";


// var Firebase = require('firebase')



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
      showRealApp:false,isVisible : true,

    };
  }



  Hide_Splash_Screen=()=>{

    this.setState({
      isVisible : false

    });

  }


  gotoNextActivity = () => {
    this.props.navigation.navigate('Forth');

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

    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false });
    });

    var that = this;

    setTimeout(function(){

      that.Hide_Splash_Screen();

    }, 2000);



  }







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
  }






  onLoginOrRegister = () => {
    GoogleSignin.signIn()
        .then((data) => {
          // Create a new Firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
          // Login with the credential
          return firebase.auth().signInWithCredential(credential);
        })
        .then((user) => {
          // If you need to do anything with the user, do it here
          // The user will be logged in automatically by the
          // `onAuthStateChanged` listener we set up in App.js earlier
        })
        .catch((error) => {
          const { code, message } = error;
          // For details of error codes, see the docs
          // The message contains the default Firebase string
          // representation of the error
        });
  }


  _signOut = async () => {
    //Remove user session from the device.
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



  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;
    const {email,password}=this.state;
    const {userInfo}=this.state;

    return (


          <ScrollView>
              <View style={{justifyContent:'center',height:'100%',width:'100%',alignSelf:'center',alignItems:'center',backgroundColor:'#353535'}}>


<View style={{justifyContent:'center',marginTop:25,margin:15,height:'40%',width:'100%',alignSelf:'center',alignItems:'center',backgroundColor:'#353535'}}>

          <AppIntroSlider
              slides={slides1}
              style={{backgroundColor:'#353535',borderRadius:15,margin:1,marginTop:15}}
          />

</View>

<View style={{height:700,borderColor:'#fff',}}>
          <Collapse style={{padding:25,justifyContent:'center',alignSelf:'center',alignItems:'center',width:'100%',}}>
            <CollapseHeader style={{width:350,height:50,}}>
              <View>
                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:20,padding:15,fontSize: 15,fontFamily:'algerian',color: '#fff'}}>PHONE ACTIVATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
              <View style={{ padding: 25,marginTop:50}}>

                <Text style={{color:'#fff'}}>Enter phone number:</Text>
                <TextInput
                    autoFocus
                    style={{ height: 40, marginTop: 15, marginBottom: 15 ,color:'#fff'}}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={'Phone number ... '}
                    keyboardType = 'numeric'
                    value={phoneNumber}
                />
                <Button title="Sign In" color="#59A45C" onPress={this.signIn} />
              </View>
            </CollapseBody>
          </Collapse>
          <Collapse style={{padding:15,justifyContent:'center',alignSelf:'center',alignItems:'center',}}>
            <CollapseHeader style={{width:300,height:50,}}>
              <View>
                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:20,padding:15,fontSize: 15,fontFamily:'algerian',color:'#fff'}}>GOOGLE ACTIVATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>

              <View style={{ width:200, height: 48,alignSelf:'center' }} >
                <GoogleSigninButton
                    style={{ width:225, height: 48,alignSelf:'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.onLoginOrRegister}
                />
                <Button
                    title='sign out....!!'
                    style={{ width:200, height: 48,alignSelf:'center' }}
                    color="red"
                    onPress={this._signOut}
                />


              </View>
            </CollapseBody>
          </Collapse>
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
          <Image source={require('./Excersises/gifs/loading.gif')}
                 style={{flexDirection: 'column',
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: '60%',borderRadius:15,width:'100%'}}/>

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
          <View style = { styles.MainContainer }>



            {
              (this.state.isVisible === true) ? Splash_Screen : Splash_Screen
            }


          </View>
      )
    }
    if(!this.state.showRealApp)
    {


      return (
          <View style={{ flex: 1 }}>



            {!user && !confirmResult && this.renderPhoneNumberInput()}

            {this.renderMessage()}

            {!user && confirmResult && this.renderVerificationCodeInput()}
           {user && (


                <View
                    style={{flex: 1,backgroundColor:'#111111'}}>

                  <Image source={require('./Excersises/gifs/welcome.gif')}
                         style={{flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60%',borderRadius:15,width:'100%'}}/>
                  <Text style={{ fontSize: 25, position: 'absolute',margin:15,alignSelf:'center' ,color:'#f1f1f1',bottom:'25%'}}>Welcome!</Text>

                  <View>

                  </View>
                  <TouchableHighlight  style={{ position: 'absolute',margin:15,right:0,bottom:20}}>
                    <Button title="next" color="#59A45C" onPress={()=>this.props.navigation.navigate('Home')}/>

                  </TouchableHighlight>
                  <TouchableHighlight style={{ position: 'absolute',margin:15,left:0,bottom:20}}>
                    <Button title="Sign Out" color="red" onPress={this.signOut} />
                  </TouchableHighlight>
                </View>


            )}
          </View>


      );
    }
    else {
      return (
          this.props.navigation.navigate('Home')
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


    this.props.navigation.navigate('Home')
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state

    this.props.navigation.navigate('Home')
  };
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
              This will be your screen when you click Skip from any slide or Done
              button at last
            </Text>
          </View>
      );
    } else {
      //Intro slides
      return (
          <AppIntroSlider
              slides={slides}
              //comming from the JsonArray below
              onDone={()=>this._onDone()}
              //Handler for the done On last slide
              showSkipButton={true}
              onSkip={()=>this._onSkip()}
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
    color: '#000',
    fontSize: 20,
    padding:15,justifyContent:'center',alignSelf:'center',alignItems:'center',

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
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
    title: 'Access Free',
    titleStyle: styles.title,
    text: 'We Provide You Free Traning',
    image: {
      uri:
          'https://media.giphy.com/media/xUA7bbcVDWik6cPdmg/giphy.gif',

    },

    imageStyle: styles.image,


  },
  {
    key: 's3',
    title: 'We will Guide you!',
    titleStyle: styles.title,
    text: 'Enjoy all of our services',
    image: {
      uri: 'https://media.giphy.com/media/vEvveLdoyZCms/giphy.gif'   },
    imageStyle: styles.image,
  },

];




const RootStack = createStackNavigator(
    {
      Apps:PhoneAuthTest,
      Appintro:Appintro,
       Home:HomePage


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
