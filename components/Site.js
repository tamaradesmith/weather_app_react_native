import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Site(props) {

  return (
    
    <View style={styles.body}>
      <Text >
        Site
      </Text>
    </View>

  );
};


const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    backgroundColor: "green"
  }
})


export default Site;