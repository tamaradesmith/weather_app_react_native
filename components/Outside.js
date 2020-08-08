import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Outside(props) {

  return (

    <View style={styles.body}>
      <Text >
        Outside
      </Text>
    </View>

  );
};


const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    backgroundColor: "yellow"
  }
})


export default Outside;