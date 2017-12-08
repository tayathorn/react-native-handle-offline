import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { withNetworkConnectivity } from 'react-native-offline'

import store from './store'
import AppRouter from './navigation/router'

const AppWrapper = withNetworkConnectivity({
  withRedux: true,
})(AppRouter)

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppWrapper />
      </Provider>
    );
  }
}
