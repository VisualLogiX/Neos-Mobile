import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {StyleSheet, View, Text,Linking } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import axios from 'axios'


export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{Linking.openURL('https://account.neosvr.com/')}} style={styles.text}>Create Account</Text>
        <Text onPress={()=>{
axios
  .post('https://www.neosvr-api.com/api/users/requestlostpassword', {
    email: ""
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  }} style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    position:"relative",
    color: 'white',
    backgroundColor: 'transparent',
  },
});
