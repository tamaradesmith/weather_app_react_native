import React, { useState, useEffect } from 'react';
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

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const SiteStack = createStackNavigator();
const TabSite = createMaterialTopTabNavigator();

const App = () => {

  const [user, setUser] = useState('guest')
  const [displays, setDisplays] = useState([])

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', user: user, headerShown: false }}
        />
        {}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Log In', headerShown: false }}
        // screenProps={[{ name: 'inside', id: 20 }, { name: 'outside', id: 27 }]}
        />
      </Stack.Navigator>
    )
  };

  function createTabSite() {
    if (displays.length !== 0) {
      const sites = displays.site
      const result = [];
      let current = []
      let type = sites[0].type
      sites.map((site, index) => {
        if (site.type === type) {
          current.push(site);
        } else {
          result.push(current);
          type = site.type;
          current = [site];
        };
        if (index === sites.length - 1) {
          result.push(current)
        };
      });
      return (
        <TabSite.Navigator>
          {result.map((sensor, index) =>
            <TabSite.Screen
              key={"nav", sensor[0].sensor_id}
              name={sensor[0].sensor}
              component={Chart}
              options={{ title: sensor.name, user: user, }}
              initialParams={sensor}
            />
          )}
        </TabSite.Navigator>
      )
    } else {
      console.log('return null')
      return null
    }
  }

  function createSiteStack() {
    // const site = displays.site
    return (
      <SiteStack.Navigator>
        <SiteStack.Screen
          name="Site"
          component={Site}
          options={{ title: 'Site', user: user, headerShown: false }}
        />

        <SiteStack.Screen
          name="Chart"
          component={createTabSite}
          options={{ title: 'Chart', headerShown: true }}
        />
      </SiteStack.Navigator>
    )
  }


  async function getDisplays() {
    try {
      const allDisplays = await Display.getUserDisplays();
      setDisplays(allDisplays)
    } catch (error) {
      console.error('get user display', error.message);
    }
  };

  useEffect(() => {
    let unmounted = false;
    getDisplays();
    return () => { unmounted = true };
  }, [])

  useEffect(() => {
    let unmounted = false;
    createSiteStack();
    return () => { unmounted = true };
  }, [displays]);

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
          <Tab.Screen
            name="Site"
            component={createSiteStack}
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



// const displays = {
//   "humidily": [
//     { "display": "site", "id": "1", "name": "humidilyInside", "sensor_id": 36, "type": "humidily" },
//     { "display": "site", "id": "1", "name": "humidilyOutside", "sensor_id": 35, "type": "humidily" },
//     { "display": "inside", "id": "2", "name": "humidily", "sensor_id": 36, "type": "humidily" },
//     { "display": "outside", "id": "3", "name": "humidily", "sensor_id": 35, "type": "humidily" }],

//   "ppm": [{ "display": "inside", "id": "2", "name": "co", "sensor_id": 23, "type": "ppm" }], "pressure": [{ "display": "site", "id": "1", "name": "pressureSensor", "sensor_id": 28, "type": "pressure" }], "range": [{ "display": "site", "id": "1", "name": "rainfallSensor", "sensor_id": 34, "type": "range" }, { "display": "site", "id": "1", "name": "windSpeed", "sensor_id": 37, "type": "range" }, { "display": "site", "id": "1", "name": "windDirection", "sensor_id": 38, "type": "range" }, { "display": "inside", "id": "2", "name": "particule", "sensor_id": 24, "type": "range" }, { "display": "outside", "id": "3", "name": "windSpeed", "sensor_id": 37, "type": "range" }, { "display": "outside", "id": "3", "name": "windDirection", "sensor_id": 38, "type": "range" }, { "display": "outside", "id": "3", "name": "skyRed", "sensor_id": 16, "type": "range" }, { "display": "outside", "id": "3", "name": "rainfallSensor", "sensor_id": 34, "type": "range" }, { "display": "outside", "id": "3", "name": "skyGreen", "sensor_id": 17, "type": "range" }, { "display": "outside", "id": "3", "name": "skyBlue", "sensor_id": 18, "type": "range" }], "temperature": [{ "display": "site", "id": "1", "name": "temperatureInside", "sensor_id": 20, "type": "temperature" }, { "display": "site", "id": "1", "name": "temperatureOutside", "sensor_id": 27, "type": "temperature" }, { "display": "inside", "id": "2", "name": "temperatureMain", "sensor_id": 20, "type": "temperature" }, { "display": "inside", "id": "2", "name": "temperatureBedroom", "sensor_id": 1, "type": "temperature" }, { "display": "outside", "id": "3", "name": "temperatureOutside", "sensor_id": 27, "type": "temperature" }, { "display": "outside", "id": "3", "name": "temperatureShade", "sensor_id": 13, "type": "temperature" }]
// }
