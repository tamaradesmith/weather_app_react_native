import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { Sensor } from '../../js/request'

function Rain(props) {
  const { widthSize, heightSize, displaySensors } = props;

  const [sensor, setSensor] = useState({})

  async function getLastReading() {
    const sensorReading = await Sensor.getReading(displaySensors);
    const daily = await Sensor.getDayReadings(displaySensors);
    setSensor({ sensor: displaySensors, reading: sensorReading.value.toFixed(1), daily: daily.daily.toFixed(1) })
  };

  useEffect(() => {
    if (displaySensors) {
      getLastReading();
    };
  }, [displaySensors])

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.header}> Rainfall</Text>
        <Text style={styles.textStyle}>Hour: {sensor.reading}</Text>
        <Text style={styles.textStyle}>Daily: {sensor.daily} </Text>
      </View>

      <View>
        <LinearGradient
          colors={['#3e517a00', '#3e517a']}>
          <Image source={require('../../image/rainfall.png')} style={{
            width: widthSize,
            height: heightSize,
          }} />
        </LinearGradient>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginBottom: 50,
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



export default Rain;