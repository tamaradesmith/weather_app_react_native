import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import NavBar from "./components/NavBar";
import Site from './components/Site';
import AppNavigator from './components/partials/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView >
        <View style={styles.nav} >
          <NavBar />
        </View>
        <ScrollView style={styles.body}>

          <View >

            {/* <Site /> */}
            <Button
              title="Site"
              onPress={() =>
                props.navigation.navigate('Site')
              }
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fffcf2',
  },
  nav: {
    width: '100%',
  },
});

export default App;
