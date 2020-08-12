import React from 'react';
// import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import NavBar from "./components/NavBar";
import Site from './components/Site';
// import Inside from './components/Inside';
// import Outside from './components/Outside';
// import AppNavigator from './components/partials/AppNavigator';



const App = () => {


  function goTo() {
    alert('meow')
    navigation.navigate('Site')
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView >
        <View style={styles.nav} >
          <NavBar />
        </View>
        <ScrollView style={styles.body}>

          <View >
            {/* <NavigationContainer>
              <AppNavigator />
            </NavigationContainer> */}
            <Site />

          </View>
          <View>
            <Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text><Text> Meow </Text>
          </View>
          <View>
            {/* 
            <Button
              title="Site"
              onPress={() => navigation.navigate('Site')}
            /> */}

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fffcf2',
    minHeight: "100%"
  },
  nav: {
    width: '100%',
  },
});

export default App;


// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;