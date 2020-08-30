import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from './/components/partials/RootNavigations';


import styles from './styles/styles';

import NavBar from "./components/NavBar";
import Site from './components/Site';
import Inside from './components/Inside';
import Outside from './components/Outside';
import Home from './components/Home';
import Login from './components/partials/Login';
import Chart from './components/Chart';

const Tab = createMaterialTopTabNavigator()
const Stact = createStackNavigator()

const App = () => {

  const [user, setUser] = useState('guest')

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
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
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home', user:user }}
            screenProps={{ user: user }}

          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ title: 'Log In' }}
          />
          <Tab.Screen
            name="Site"
            component={Site}
            options={{ title: 'Site' }}
          />
          <Tab.Screen
            name="Inside"
            component={Inside}
            options={{ title: 'Inside' }}
          />
          <Tab.Screen
            name="Outside"
            component={Outside}
            options={{ title: 'Outside' }}
          />
          {/* <Tab.Screen
            name="Chart"
            component={Chart}
            options={{ title: 'Chart' }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;

