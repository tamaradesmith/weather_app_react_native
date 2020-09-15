import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import { Sensor } from '../../js/request';
import styles from '../../styles/styles';

function Rain(props) {
  const { widthSize, heightSize, displaySensors } = props;

  const [sensor, setSensor] = useState({});
  const [colours, setColours] = useState(['#fffcf2', '#fffcf2', '#3e517a']);

  async function getLastReading() {
    const sensorReading = await Sensor.getReading(displaySensors);
    const daily = await Sensor.getDayReadings(displaySensors);
   const value = (daily.daily !== null)  ? daily.daily : 0;
    setSensor({ sensor: displaySensors, reading: sensorReading.value.toFixed(1), daily: value.toFixed(1) });
  };

  function setupColour() {
    if (sensor) {
      let i = sensor.daily;
      const result = ['#fffcf2', '#fffcf2', '#3e517a'];
      while (i > 0) {
        result.push('#3e517a');
        i -= .75;
      };
      setColours(result);
    };
  };

  useEffect(() => {
    if (displaySensors !== undefined) {
      getLastReading();
    };
  }, [displaySensors]);

  useEffect(() => {
    if (sensor) {
      setupColour();
    };
  }, [sensor]);

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.header}> Rainfall</Text>
        <Text style={styles.textStyle}>Hour: {sensor.reading}</Text>
        <Text style={styles.textStyle}>Daily: {sensor.daily} </Text>
      </View>

      <View>
        <LinearGradient
          colors={colours}>
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