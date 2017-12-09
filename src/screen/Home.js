import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  View, Text,
} from 'react-native';
import { ConnectivityRenderer } from 'react-native-offline'
import { getUserRequested } from '../actions/getUser'

import UserData from '../data/user'

import Button from '../components/Button'
import UserList from '../components/UserList'

class Home extends Component {

  _getUser = () => {
    const { user } = this.props
    this.props.dispatch(getUserRequested())
  }

  _onPressAddNewUser = () => {
    this._getUser()
  }

  _onPressUser = (index) => {
    this.props.navigation.navigate('Detail')
  }

  _renderNoNetwork = () => {
    return(
      <View style={styles.noNetwork.wrapper} >
        <Text style={styles.noNetwork.title} >
          No Internet
        </Text>
      </View>
    )
  }
  
  render() {
    const { data } = this.props.user
    return (
      <View style={styles.container} >
        <ConnectivityRenderer>
          {
            isConnected => (
              isConnected ? (
                null
              ) : (
                this._renderNoNetwork()
              )
            )
          }
        </ConnectivityRenderer>
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
  },

  noNetwork: {
    wrapper: {
      height: 30,
      backgroundColor: '#b71c1c',
      justifyContent: 'center'
    },
    title: {
      color: 'white',
      textAlign: 'center'
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Home)
