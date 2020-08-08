import { createStackNavigator } from 'react-navigation';

import Site from '../Site';
import Outside from '../Outside';
import Inside from '../Inside';

const AppNavigator = createStackNavigator({
  Site: { screen: Site },
  Outside: { screen: Outside },
  Inside: { screen: Inside },
});
