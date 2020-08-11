import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Sensor } from "../../js/request"


const colours = ["#57C4E5", "#B8F3FF", "#DEFFFC", "#F4F1BB", "#FFF07C", "#F5BB00", "#EC9F05", "#D76A03", '#BF3100', "#A30000"]


function Temperature(props) {
const {size} = props;
  const [sensor, setSensor] = useState({ id: 'moew' })
  const [reading, setReading] = useState()

  const abortController = new AbortController();
  const signal = abortController.signal;


  async function getSensor() {
    const info = await Sensor.getSensor(27)
    setSensor(info)

    return function cancel() {
      abortController.abort()
    }
  }

  async function getReading() {
    const sensorReading = await Sensor.getReading(sensor.id)
    setReading(sensorReading.value)
  }

  useEffect(() => {
    getSensor();
  }, [])

  useEffect(() => {
    getReading();
  }, [sensor])
  return (
    <View style={styles.body}>
      <View  >
        <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={['red', 'yellow']} >

          <Image
            source={require('../../image/thermometer.png')} style={{ width: size}}/>
        </LinearGradient>
      </View>

      <View>
        <Text>Current {sensor.name}</Text>
        <Text>High  {reading}</Text>
        <Text>Low</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: 'row'
  },
  thermometer: {
    // backgroundColor: "linear-gradient(transparent 0%, transparent 50%, green 50%, red 100%",
  }
});
export default Temperature;