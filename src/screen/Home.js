import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Button from '../components/Button'

export default class Home extends Component {
  render() {
    console.log('button : ', styles.button)
    return (
      <View style={styles.container} >
        <Button 
          style={styles.button} 
          title={'Push New Page : HOC'}
        />
        <Button 
          style={styles.button} 
          title={'Add User'}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },

  button: {
    margin: 10,
  }
}