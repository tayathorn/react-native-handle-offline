import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
} from 'react-native';

import { withNetworkConnectivity } from 'react-native-offline'
class Detail extends Component {
  _renderImage = () => {
    return (
      <Image
        source={{ uri: 'https://orig00.deviantart.net/2529/f/2015/292/6/c/we_bare_bears_by_oysteice-d9dnc4l.png' }}
        style={styles.image}
      />
    )
  }

  _renderNoNetwork = () => {
    return (
      <Text style={{ textAlign: 'center' }} >
        No Internet
      </Text>
    )
  }

  render() {
    console.log('[isConnected] -- inject as prop : ', this.props.isConnected)
    return (
      <View style={styles.container} >
        {
          this.props.isConnected ? this._renderImage() : this._renderNoNetwork()
        }
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'contain'
  }
}

export default withNetworkConnectivity({
  // withRedux: true,
})(Detail)