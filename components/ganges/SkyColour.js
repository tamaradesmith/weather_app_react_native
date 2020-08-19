import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

import { Sensor } from "../../js/request";
import styles from '../../styles/styles'

function SkyColour(props) {

  const { widthSize, heightSize, displaySensors } = props;

  const [sensors, setSensors] = useState([]);
  const [colours, setColours] = useState({})

  const abortController = new AbortController();


  async function getSensors() {
    const colourReading = {};
    const list = await Promise.all(
      displaySensors.map(async sensor => {
        const reading = await getReading(sensor.id);
        sensor.reading = reading
        colourReading[sensor.name] = reading;
        return sensor;
      }))
      .catch(error => { console.log('error ', error.message) })
    setSensors(list)
    setColours(colourReading)
    return function cancel() {
      abortController.abort();
    };
  };

  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id)
    return Math.round(sensorReading.value)
  };

  useEffect(() => {
    if (displaySensors !== undefined) {
      getSensors();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displaySensors]);



  return (
    <View style={styles.body}>
      {colours.red ? (

        <View style={{ width: widthSize, height: heightSize, backgroundColor: `rgb(${colours.red}, ${colours.green}, ${colours.blue})` }}>
        </View>

      ) : null}

      <Text style={styles.header}>SkyColour</Text>
    </View>
  );
};

export default SkyColour;