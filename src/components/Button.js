import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, {...style}]}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#212121',
    padding: 15,
  },

  title: {
    color: 'white',
  },
})

export default Button