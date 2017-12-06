import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

const THUMBNAIL_SIZE = 50

const User = ({ onPress, thumbnail, name }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress} >
      <View style={styles.thumbnailWrapper} >
        <Image
          source={{ uri: thumbnail }}
          style={styles.userThumbnail}
        />
      </View>
      <View style={styles.nameWrapper} >
        <Text style={styles.userName} >
          {`${name.title}. ${name.first} ${name.last}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    padding: 10,
  },

  thumbnailWrapper: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
  },

  userThumbnail: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    borderRadius: THUMBNAIL_SIZE / 2,
  },

  nameWrapper: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },

  userName: {
    fontSize: 16,
  }
}

export default User
