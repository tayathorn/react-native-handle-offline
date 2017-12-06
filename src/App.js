import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import store from './store'

import AppRouter from './navigation/router'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppRouter />
      </Provider>
    );
  }
}
