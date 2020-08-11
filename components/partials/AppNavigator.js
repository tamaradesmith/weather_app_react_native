import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Site from '../Site';
import Outside from '../Outside';
import Inside from '../Inside';

// const AppNavigator = createStackNavigator({
//   Site: { screen: Site },
//   Outside: { screen: Outside },
//   Inside: { screen: Inside },
// });



// function Site() {
//   return (
//     <View><Site /></View>
//   )
// }


const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Site} />
      <Stack.Screen name="Site" component={Site} />
      <Stack.Screen name="Inside" component={Inside} />
      <Stack.Screen name="Outside" component={Outside} />
    </Stack.Navigator>
  );
}
export default AppNavigator