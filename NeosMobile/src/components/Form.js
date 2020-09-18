import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.passwordContainer}>
      <UserInput
          onChangeText={text => {window.things.login.email = text}}
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        /></View>
        <View style={styles.passwordContainer}>
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    paddingTop: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerkeyboard: {
    flex: 1,
    height: DEVICE_HEIGHT/6,
    alignItems: 'center',
  },
  btnEye: {
    position: "relative",
    top: 12,
    right: 28,
  },
  iconEye: { 
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
