import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import MyAppText from './components/partials/MyAppText'
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <SafeAreaView>
        <ScrollView>

          <View >
           <MyAppText>
          <Text style={{color: 'green'}}>

            MEOW
          </Text> 
            <Text> Here is some text</Text>
            <Text style={styles.body}> Meow Meow</Text>
             </MyAppText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 54,
    color: 'blue'
  }
});

export default App;
