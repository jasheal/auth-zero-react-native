/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import AuthZer0 from './components/auth0';

export default class AuthZeroReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthZer0 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});