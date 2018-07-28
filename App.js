import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import CreateAccountScreen from './modules/create-account/create-account'
import RecoverPasswordScreen from './modules/recover-password/recover-password'
import styles from './style'
console.log(styles.link);
class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render(){
      return (
        <ScrollView>
         <View style = {styles.container}>
         <View style={styles.imgContain}>
            <Image 
              style={styles.imgStyle} 
              resizeMode="contain" 
              source={require('./assets/images/healthHubLogo.png')}
            />
         </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#60718d"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#60718d"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {styles.linkinfo}
                onPress={() => this.props.navigation.navigate('Account')}>
                <Text style = {styles.linktext}> Create Account </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {styles.linkinfo}
                onPress={() => this.props.navigation.navigate('Recover')}>
                <Text style = {styles.linktext}> Forgot Password </Text>
            </TouchableOpacity>
          
            <Text style ={styles.paragraph}>
            You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
            </Text>
            <Text style ={styles.footnote}>
            &#169;2018 HealthHub
            </Text>
         </View>
         </ScrollView>
      )
   }
}

const RootStack = createStackNavigator(
  {
    Home: Inputs,
    Account: CreateAccountScreen,
    Recover: RecoverPasswordScreen
  }, 
  {
    initialRouteName: 'Home'
  }
);


export default class App extends Component {
  render() {
    return <RootStack/>;
  }
};

