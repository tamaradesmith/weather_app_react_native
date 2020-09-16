import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from './/components/partials/RootNavigations';

import SplashScreen from 'react-native-splash-screen'

import { Display } from './js/request';

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
const InsideStack = createStackNavigator();
const TabInside = createMaterialTopTabNavigator();
const OutsideStack = createStackNavigator();
const TabOutside = createMaterialTopTabNavigator();

const App = () => {

  const [user, setUser] = useState('guest');
  const [displays, setDisplays] = useState([]);

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
      </Stack.Navigator>
    );
  };

  function createTabSite() {
    if (displays.length !== 0) {
      const sites = displays.site;
      const result = [];
      let current = [];
      let type = sites[0].type;
      sites.map((site, index) => {
        if (site.type === type) {
          current.push(site);
        } else {
          result.push(current);
          type = site.type;
          current = [site];
        };
        if (index === sites.length - 1) {
          result.push(current);
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
      return null;
    };
  };

  function createSiteStack() {
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
          options={{ title: 'Chart', headerShown: false }}
        />
      </SiteStack.Navigator>
    )
  }

  function createTabInside() {
    if (displays.length !== 0) {
      const insides = displays.inside;
      const result = [];
      let current = [];
      let type = insides[0].type;
      insides.map((inside, index) => {
        if (inside.type === type) {
          current.push(inside);
        } else {
          result.push(current);
          type = inside.type;
          current = [inside];
        };
        if (index === insides.length - 1) {
          result.push(current);
        };
      });
      return (
        <TabInside.Navigator>
          {result.map((sensor) =>
            <TabInside.Screen
              key={"nav", sensor[0].sensor_id}
              name={sensor[0].sensor}
              component={Chart}
              options={{ title: sensor.name, user: user, }}
              initialParams={sensor}
            />
          )}
        </TabInside.Navigator>
      );
    } else {
      return null
    }
  }

  function createInsideStack() {
    return (
      <InsideStack.Navigator>
        <InsideStack.Screen
          name="Inside"
          component={Inside}
          options={{ title: 'Inside', user: user, headerShown: false }}
        />
        <InsideStack.Screen
          name="Chart"
          component={createTabInside}
          options={{ title: 'Chart', headerShown: false }}
        />
      </InsideStack.Navigator>
    );
  };




  function createTabOutside() {
    if (displays.length !== 0) {
      const outsides = displays.outside;
      const result = [];
      let current = [];
      let type = outsides[0].sub_type;
      const allsubTypes = [type];
      outsides.map((outside, index) => {
        function getIndex(value) {
          return outside.sub_type;
        }
        if (outside.sub_type === type) {
          current.push(outside);
        } else if (allsubTypes.includes(outside.sub_type)) {
          const i = allsubTypes.findIndex(getIndex)
          result[i].push(outside)
        } else {
          result.push(current);
          type = outside.sub_type;
          current = [outside];
        };
        if (!allsubTypes.includes(outside.sub_type)) {
          allsubTypes.push(outside.sub_type);
        }
        if (index === outsides.length - 1) {
          result.push(current);
        };
      });
      return (
        <TabOutside.Navigator>
          {result.map((sensor) =>
            <TabOutside.Screen
              key={"nav", sensor[0].sensor_id}
              name={sensor[0].sensor}
              component={Chart}
              options={{ title: sensor.name, user: user, }}
              initialParams={sensor}
            />
          )}
        </TabOutside.Navigator>
      );
    } else {
      return null;
    };
  };

  function createOutsideStack() {
    return (
      <OutsideStack.Navigator>
        <OutsideStack.Screen
          name="Outside"
          component={Outside}
          options={{ title: 'Outside', user: user, headerShown: false }}
        />
        <OutsideStack.Screen
          name="Chart"
          component={createTabOutside}
          options={{ title: 'Chart', headerShown: false }}
        />
      </OutsideStack.Navigator>
    );
  };

  async function getDisplays() {
    try {
      const allDisplays = await Display.getUserDisplays();
      setDisplays(allDisplays);
    } catch (error) {
      console.error('get user display', error.message);
    };
  };

  useEffect(() => {
    let unmounted = false;
    getDisplays();
    return () => { unmounted = true };
  }, []);

  useEffect(() => {
    let unmounted = false;
    createSiteStack();
    createInsideStack();
    createOutsideStack();
    return () => { unmounted = true };
  }, [displays]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
            component={createInsideStack}
            options={{ title: 'Inside' }}
          />
          <Tab.Screen
            name="Outside"
            component={createOutsideStack}
            options={{ title: 'Outside' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
