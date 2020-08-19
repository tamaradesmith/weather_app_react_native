import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Sensor } from '../../js/request';
import styles from '../../styles/styles'


const rating = [{ level: 'Hazardous', colour: "#6B0F1A", background: '#6b0f1a80' },
{ level: "Very Unhealthy", colour: "#AC3920", background: "#AC392080" },
{ level: "	Unhealthy", colour: "#F56329", background: "#F5632980" },
{ level: "Moderate", colour: "#FFDD33", background: "#FFDD3380" },
{ level: 'Good', colour: "#11BB63", background: "#11BB6380" }]


function AirQuality(props) {
  const { widthSize, heightSize, displaySensors, flexDirection } = props;

  const [sensor, setSensor] = useState([])

  async function getReading() {
    const reading = await Sensor.getReading(displaySensors.id);
    displaySensors.reading = reading.value;
    const colour = setLevelInfo(reading.value);
    displaySensors.colour = colour;
    setSensor(displaySensors)
  }




  function setLevelInfo(value) {
    let colour;
    if (value <= 50) {
      colour = rating[4]
    } else if (value <= 100) {
      colour = rating[3]
    } else if (value <= 150) {
      colour = rating[2]
    } else if (value <= 200) {
      colour = rating[1]
    } else {
      colour = rating[0]
    }
    return colour;
  }

  useEffect(() => {
    if (displaySensors.id !== undefined) {
      getReading();
    }
  }, [displaySensors]);

  if (!sensor.colour) {
    return <Text> Loading  </Text>
  }

  return (
    <View style={{
      display: 'flex',
      flexDirection: flexDirection || 'row',
      justifyContent: 'space-around',
      padding: 5,
      marginBottom: 50,
    }}>


      <View style={{ width: widthSize, height: heightSize, backgroundColor: `${sensor.colour.colour}` }}>
      </View>

      <View>
        <Text style={styles.header}>  {sensor.name} </Text>
        <Text style={styles.textStyle}> {sensor.colour.level} </Text>
      </View>
    </View>
  );
};


export default AirQuality;