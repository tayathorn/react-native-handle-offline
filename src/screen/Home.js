import React, { Component } from 'react';
import {
  View,
} from 'react-native';


import UserData from '../data/user'

import Button from '../components/Button'
import UserList from '../components/UserList'

export default class Home extends Component {
  _onPressAddNewUser = () => {

  }
  _onPressUser = (index) => {
  
  }
  render() {
    console.log('button : ', styles.button)
    return (
      <View style={styles.container} >
        <Button 
          style={styles.button} 
          title={'Add User'}
          onPress={this._onPressAddNewUser}
        />
        <UserList 
          data={UserData} 
          onPress={this._onPressUser}
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