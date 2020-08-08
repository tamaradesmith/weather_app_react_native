import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import MyAppText from './components/partials/MyAppText'
import NavBar from "./components/NavBar"

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
            <MyAppText style={styles.main}>
        

           
              <Text> MEOWs  </Text>
              <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text>
              <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text> <Text> Here is some text</Text>
              <Text > Meow Meow Me</Text>
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
    color: 'blue',
    display: 'flex',
    backgroundColor: '#fffcf2',
  },
  nav: {
    width: '100%',
  },
  main: {
    display: "flex",
    flexDirection: "column"
  }
});

export default App;
