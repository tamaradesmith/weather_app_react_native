import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


function Humidity(props) {

  const { widthSize, heightSize, displaySensors } = props;

  return (
    <View style={styles.body}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={['green', 'purple']}>
          <Image source={require('../../image/humidityIcon.png')}
            style={{
              width: widthSize,
              height: heightSize,
            }} />
        </LinearGradient>
      </View>
      <Text style={styles.header}>Humidity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  textStyle: {
    fontSize: 30,
    textTransform: "capitalize",
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: "capitalize",
  },
});

export default Humidity