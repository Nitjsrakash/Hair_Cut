import { createStackNavigator } from 'react-navigation-stack';
import  Login from '../component/Login/Login'
import Passwordforget from '../component/Login/Passwordforget'


export default AuthenticationStack = () => createStackNavigator({
Login: {
    screen: Login
  },
  Passwordforget: {
    screen: Passwordforget
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
