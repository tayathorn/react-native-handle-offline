import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import axios from 'axios'


import UserData from '../data/user'

import Button from '../components/Button'
import UserList from '../components/UserList'

export default class Home extends Component {

  state = {
    users: [...UserData]
  }

  _getUser = () => {
    const { users} =this.state
    axios.get('https://randomuser.me/api')
      .then((response) => {
        const {results} = response.data
        this.setState({
          users: [...results, ...users ]
        })
      })
  }
  _onPressAddNewUser = () => {
    this._getUser()
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
          data={this.state.users} 
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