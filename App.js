import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from './/components/partials/RootNavigations';


import { Display } from './js/request'

import NavBar from "./components/NavBar";
import Site from './components/Site';
import Inside from './components/Inside';
import Outside from './components/Outside';
import Home from './components/Home';
import Login from './components/partials/Login';
import Chart from './components/Chart';

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const App = () => {

  const [user, setUser] = useState('guest')
  const [displays, setdisplays] = useState([])

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', user: user, headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Log In', headerShown: false }}
        />
        {/* <Stack.Screen
          name="Chart"
          component={Chart}
          options={{ title: 'Chart', headerShown: false  }}
        /> */}
      </Stack.Navigator>
    )
  };

  async function getDisplays() {
    try {
      const allDisplays = await Display.getUserDisplays();
      createStacks(allDisplays)
    } catch (error) {
      console.error('get user display', error.message);
    }
  };
  

  function createStacks(displays) {
    const result = [];
    const keys = Object.keys(displays)
    let stack = `<Stack.Navigator>`;
    keys.forEach(key => {

      displays[key].forEach(page => {
        stack += `<Stack.Screen
       name="${page.name}"
       component={Chart}
       options={{ headerShown: false }}
       />`

      });
      stack += '</Stack.Navigator>'
      console.log("createStacks -> stack", stack);

    })
  }
  getDisplays();

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
            component={HomeStack}
            options={{ title: 'Home', user: user }}
          />
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Log In', headerShown: false }}
          /> */}
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


      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={Login}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Log In' }}
          />
          <Stack.Screen
            name="Chart"
            component={Chart}
            options={{ title: 'Chart' }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}


    </>
  );
};


export default App;

