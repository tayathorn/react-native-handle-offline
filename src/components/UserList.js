import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native'

import User from './User'

const UserList = ({ data, onPress }) => {

  _keyExtractor = (item, index) => index

  _renderUser = ({ item }) => {
    const { name, picture} = item

    return (
      <User
        name={name}
        thumbnail={picture.thumbnail}
        onPress={onPress}
      />
    )
  }
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderUser}
    />
  )
}

const styles = {
  container: {
    flex:1,
  }
}

export default UserList
