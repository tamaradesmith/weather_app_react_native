import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../../styles/styles';
import { Sensor } from '../../js/request';


const colours = ['#57C4E5', '#B8F3FF', '#DEFFFC', '#F4F1BB', '#FFF07C', '#F5BB00', '#EC9F05', '#D76A03', '#BF3100', '#A30000'];

function Temperature(props) {
  const { widthSize, heightSize, displaySensors } = props;

  const [sensors, setSensors] = useState([]);
  const [colour, setColour] = useState({ top: colours[0], bottom: colours[1] })

  const abortController = new AbortController();

  async function getSensors() {
    const list = await Promise.all(

      displaySensors.map(async sensor => {
        const reading = await getReading(sensor.id);
        sensor.reading = reading;
        const sensorInfo = await Sensor.getSensor(sensor.id)
        if (sensorInfo.location === "outside") {
          if (sensor.name !== "shade") {
            const readings = await Sensor.getHighLowReadings(sensor.id);
            sensor.high = Math.round(readings.high);
            sensor.low = Math.round(readings.low);
            getColours(reading);
          }
        };
        return sensor;
      })).catch(error => { console.error('error ', error.message) })

    setSensors(list)
    return function cancel() {
      abortController.abort();
    };
  };

  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id)
    return Math.round(sensorReading.value)
  };

  function getColours(temperature) {
    if (temperature < -15) {
      bottom = colours[0];
      top = colours[0];
    } else if (temperature < -10) {
      top = colours[1];
      bottom = colours[0];
    } else if (temperature < 0) {
      top = colours[2];
      bottom = colours[1];
    } else if (temperature < 5) {
      top = colours[3];
      bottom = colours[2];
    } else if (temperature < 10) {
      top = colours[4];
      bottom = colours[3];
    } else if (temperature < 15) {
      top = colours[5];
      bottom = colours[4];
    } else if (temperature < 20) {
      top = colours[6];
      bottom = colours[5];
    } else if (temperature < 25) {
      top = colours[7];
      bottom = colours[6];
    } else {
      top = colours[8];
      bottom = colours[7];
    };
    setColour({ top, bottom })
  }

  useEffect(() => {
    if (displaySensors[0].id !== undefined) {
      getSensors();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displaySensors]);

  return (
    <View style={styles.body}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={[`${colour.top}`, `${colour.bottom}`]}>
          <Image
            source={require('../../image/thermometer.png')}
            style={{
              width: widthSize,
              height: heightSize,
            }}
          />
        </LinearGradient>
      </View>

      <View>
        <Text style={styles.header}>
          Temperature
        </Text>
        {sensors ? (
          <>

            {
              sensors.map((sensor, index) => (
                <View key={sensor.id || index}>
                  <Text style={styles.textStyle}>
                    {sensor.name}: {sensor.reading}°C
                  </Text>
                  {sensor.high ? (
                    <>
                      <Text style={styles.textStyle}>High: {sensor.high}°C </Text>
                      <Text style={styles.textStyle}>Low: {sensor.low}°C </Text>
                    </>
                  ) : null}
                </View>
              ))

            }
          </>
        ) : (
            <Text style={styles.textStyle}> No Sensor</Text>
          )}
      </View>
    </View>
  );
};


export default Temperature;
