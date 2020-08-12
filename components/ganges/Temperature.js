import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Sensor } from '../../js/request';

// const colours = ['#57C4E5', '#B8F3FF', '#DEFFFC', '#F4F1BB', '#FFF07C', '#F5BB00', '#EC9F05', '#D76A03', '#BF3100', '#A30000'];

function Temperature(props) {
  const { widthSize, heightSize, displaySensors } = props;

  const [sensors, setSensors] = useState([]);
const [message, setMessage] = useState('')

  const abortController = new AbortController();


  async function getSensors() {
    const list = await Promise.all(
      displaySensors.map(async sensor => {
        const reading = await getReading(sensor.id);
        sensor.reading = reading
        const sensorInfo = await Sensor.getSensor(sensor.id)
        if (sensorInfo.location === "outside") {
          const readings = await Sensor.getHighLowReadings(sensor.id);
          sensor.high = readings.high;
          sensor.low = readings.low;
        }
        return sensor;
      })).catch(error => { console.log(error.message) })
    setSensors(list)


    return function cancel() {
      abortController.abort();
    };
  }

  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id)
    return sensorReading.value
  };



  useEffect(() => {
    if (displaySensors) {
      getSensors();
    } else {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <View style={styles.body}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={['red', 'yellow']}>
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
                <>
                  <Text key={index} style={styles.textStyle}>
                    {sensor.name}: {sensor.reading}
                  </Text>
                  {sensor.high ? (
                    <>
                      <Text style={styles.textStyle}>High: {sensor.high} </Text>
                      <Text style={styles.textStyle}>Low: {sensor.low} </Text>
                    </>
                  ) : null}
                </>
              ))
            }
          </>
        ) : (
          <Text> No Sensor</Text>
        )}
      </View>
    </View>
  );
}

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

export default Temperature;
