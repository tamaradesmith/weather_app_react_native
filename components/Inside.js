import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Inside(props) {
  return (
    <View style={styles.body}>
      <Text>Inside</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    backgroundColor: 'purple',
  },
});

export default Inside;
