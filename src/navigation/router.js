import { StackNavigator } from 'react-navigation'

import Home from '../screen/Home'
import Detail from '../screen/Detail'

const AppRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Detail: {
    screen: Detail,
  }
}
)

export default AppRouter
