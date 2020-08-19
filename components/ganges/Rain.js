import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import { Sensor } from '../../js/request'
import styles from '../../styles/styles'

function Rain(props) {
  const { widthSize, heightSize, displaySensors } = props;

  const [sensor, setSensor] = useState({})

  async function getLastReading() {
    const sensorReading = await Sensor.getReading(displaySensors);
    const daily = await Sensor.getDayReadings(displaySensors);
   const value = (daily.daily !== null)  ? daily.daily : 0;
    setSensor({ sensor: displaySensors, reading: sensorReading.value.toFixed(1), daily: value.toFixed(1) })
  };

  useEffect(() => {
    console.log("Rain -> displaySensors", displaySensors);
    if (displaySensors !== undefined) {
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

export default Rain;