import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Temperature from './ganges/Temperature'

function Site(props) {

  return (
    
    <View style={styles.body}>
      <Text style={styles.header}>
        Site Name
      </Text>
<View>

        <Temperature size={30} />
</View>
    </View>

  );
};


const styles = StyleSheet.create({
  body: {
    fontSize: 24,
  },
  header: {
    fontSize: 35,
    textAlign: "center",
  }
})


export default Site;