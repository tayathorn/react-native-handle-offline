import { StackNavigator } from 'react-navigation'

import Home from '../screen/Home'

const AppRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  }
}
)

export default AppRouter
