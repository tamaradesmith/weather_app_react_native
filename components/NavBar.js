import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Site from './Site';
import Outside from './Outside';
import Inside from './Inside';

function Navbar(props) {
  const [hidden, setHidden] = useState(true)
  const Stack = createStackNavigator();

  function handlePress() {

    setHidden((hidden === true) ? false : true)
  };

  function siteComp(){
    return (<Site />)
  }

  return (
    <View>

      <View style={styles.body}>
        <Text>
          Weather_App
      </Text>
        <Text>
          <Text style={styles.text} onPress={handlePress}> Menu</Text>
        </Text>
      </View>
      {!hidden ? (
        <View style={styles.menu}>
   
          <NavigationContainer>
            
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={siteComp} />
                <Stack.Screen name="Details" component={Site} />
              </Stack.Navigator>
       
            {/* <Stack.Navigator>
              <Stack.Screen
                name="Site"
                component={siteComp}
                options={{
                  title: 'Site ANything?',
                }}
                style={styles.container}
              />
              <Stack.Screen name="Home" component={Site} />
              {/* <Stack.Screen name="Site" component={Site} /> */}
              {/* <Stack.Screen name="Inside" component={Inside} />
              <Stack.Screen name="Outside" component={Outside} /> */}
            {/* </Stack.Navigator> */} 
          </NavigationContainer>
        </View>
      ) : null}

    </View>
  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#3e517a',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 30,
  },
  text: {
    textAlign: 'right'
  },
  menu: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#3e517a6c',
  },
  menuItem: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
});

export default Navbar;