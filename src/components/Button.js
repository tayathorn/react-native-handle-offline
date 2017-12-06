import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

const DEFAULT_TITLE = 'Title'

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, {...style}]}>
      <Text style={styles.title}>
        {title ? title : DEFAULT_TITLE}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EA4D8A',
    padding: 15,
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
})

export default Button