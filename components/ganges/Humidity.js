import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Sensor } from '../../js/request';

import styles from '../../styles/styles';

function Humidity(props) {

  const { widthSize, heightSize, displaySensors, flexDirection } = props;

  const [sensors, setSensors] = useState([]);
  const [colours, setColours] = useState(['#fffcf2', '#fffcf2', '#3e517a']);


  async function getReading(id) {
    const sensorReading = await Sensor.getReading(id);
    return sensorReading !== NaN ? Math.round(sensorReading.value) : '##';
  };

  function setupColour() {
    if (sensors[0]) {
      let i = sensors[0].reading;
      const result = ['#fffcf2', '#fffcf2', '#3e517a'];
      while (i > 0) {
        result.push('#3e517a');
        i -= 15;
      };
      setColours(result);
    };
  };

  useEffect(() => {
    let isCancelled = false;

    
    if (displaySensors !== undefined) {
      const getSensors = async () => {
        try {
          const list = await Promise.all(
            displaySensors.map(async sensor => {
              const reading = await getReading(sensor.id);
              sensor.reading = reading;
              return sensor;
            }));
          if (!isCancelled) {
            setSensors(list);
          };
        } catch (error) {
          if (!isCancelled) {
            console.error({ error: error.message });
          };
        };
      };
      getSensors();
      return () => {
        isCancelled = true;
      };
    };
  }, [displaySensors]);

  useEffect(() => {
    if (sensors) {
      setupColour();
    };
  }, [sensors]);

  return (
    <View style={{
      display: 'flex',
      flexDirection: flexDirection || 'row',
      justifyContent: 'space-around',
      padding: 5,
      marginBottom: 50,
    }}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={colours}>
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

export default Humidity;