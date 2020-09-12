import { createStackNavigator } from 'react-navigation-stack';
import  Home from '../component/HomePage'
import DetailPage from '../component/DetailItem'
import PayMentPage from '../component/PayMentPage'



export default RootStack = () => createStackNavigator({
 Home: {
    screen: Home
  },
  DetailPage: {
    screen: DetailPage
  },
  PayMentPage: {
    screen: PayMentPage
  },
}, 
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);
