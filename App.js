import React from 'react';
// import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import { navigationRef } from './RootNavigation';
import { navigationRef } from './/components/partials/RootNavigations';


import styles from './styles/styles';

import NavBar from "./components/NavBar";
import Site from './components/Site';
import Inside from './components/Inside';
import Outside from './components/Outside';
import Home from './components/Home';
import SignIn from './components/partials/SignIn';

const Stack = createStackNavigator()


// const navigationRef = React.createRef();


// function navigate(name, params) {
//   navigationRef.current && navigationRef.current.navigate(name, params);
// }

const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"

          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#3e517a',
            },
            headerTintColor: '#fffcf2',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="Site"
            component={Site}
            options={{ title: 'Site' }}
          />
          <Stack.Screen
            name="Inside"
            component={Inside}
            options={{ title: 'Inside' }}
          />
          <Stack.Screen
            name="Outside"
            component={Outside}
            options={{ title: 'Outside' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;

