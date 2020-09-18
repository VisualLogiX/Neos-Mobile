import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image,ImageBackground,Keyboard} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <ImageBackground source={logoImg} style={styles.image} />
        <Text style={styles.text}>The Non-official Neos moblie client</Text>
      </View>
    );
  }
}


 
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 285,
    height: 50,
  },
  text: {
    fontSize:15,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 1,
  },
});
