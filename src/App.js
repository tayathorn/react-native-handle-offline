import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppRouter from './navigation/router'

export default class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}
