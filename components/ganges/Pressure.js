import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Sensor } from '../../js/request';

function Pressure(props) {

  const { widthSize, heightSize, displaySensors } = props;

  const [sensor, setSensor] = useState([]);

  async function getSensor() {
    const reading = await getReading(displaySensors.id)
    displaySensors.reading = reading
    setSensor(displaySensors)
  }

  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id)
    return Math.round(sensorReading.value)
  };


  useEffect(() => {
    if (displaySensors) {
      getSensor();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displaySensors]);

  return (
    <View style={styles.body}>
      <View>
        <Image source={require('../../image/airPressure.png')} style={{
          width: widthSize,
          height: heightSize,
        }} />
      </View>
      <View>

        <Text style={styles.header}>Pressure</Text>
        <Text style={styles.textStyle} >{sensor.name}: {sensor.reading}</Text>
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
export default Pressure;