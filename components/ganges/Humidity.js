import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Sensor } from '../../js/request';


function Humidity(props) {

  const { widthSize, heightSize, displaySensors } = props;
  console.log("Humidity -> displaySensors", displaySensors);

  const [sensors, setSensors] = useState([]);

  async function getSensors() {
    const list = await Promise.all(
      displaySensors.map(async sensor => {
        const reading = await getReading(sensor.id);
        sensor.reading = reading;
        return sensor
      }))
    setSensors(list)
  }

  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id);
    return sensorReading !== NaN ? Math.round(sensorReading.value) : '##'
  }

  useEffect(() => {
    if (displaySensors) {
      getSensors();
    }
  }, [displaySensors]);

  return (
    <View style={styles.body}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={['purple', "red", 'yellow', 'yellow', 'pink']}>
          <Image source={require('../../image/humidityIcon.png')}
            style={{
              width: widthSize,
              height: heightSize,
            }} />
        </LinearGradient>
      </View>
      <View>
        <Text style={styles.header}>Humidity</Text>
        {sensors ? (
          <>
            {sensors.map((sensor, index) => (
              <Text key={index} style={styles.textStyle}>
                {sensor.name}: {sensor.reading}%
              </Text>
            ))}
          </>
        ) : (
            <Text style={styles.textStyle}> No Sensor</Text>
          )}
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

export default Humidity