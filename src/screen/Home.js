import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  View,
} from 'react-native';

import { getUserRequested } from '../actions/getUser'

import UserData from '../data/user'

import Button from '../components/Button'
import UserList from '../components/UserList'

class Home extends Component {

  // state = {
  //   users: [...UserData]
  // }

  _getUser = () => {
    const { user } = this.props
    // axios.get('https://randomuser.me/api')
    //   .then((response) => {
    //     const {results} = response.data
    //     this.setState({
    //       users: [...results, ...users ]
    //     })
    //   })
    
    this.props.dispatch(getUserRequested())
  }
  _onPressAddNewUser = () => {
    this._getUser()
  }
  _onPressUser = (index) => {

  }
  render() {
    const { data } = this.props.user
    return (
      <View style={styles.container} >
        <Button
          style={styles.button}
          title={'Add User'}
          onPress={this._onPressAddNewUser}
        />
        <UserList
          data={data}
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
