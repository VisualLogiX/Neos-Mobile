import React, {Component ,} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import DeviceInfo from 'react-native-device-info';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <View style={{    "flexDirection": 'row',    "paddingTop": 33  }}></View>
        <ButtonSubmit />
        <SignupSection />
      </Wallpaper>
    );
  }
}

