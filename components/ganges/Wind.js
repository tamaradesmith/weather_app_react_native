import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import { Sensor } from "../../js/request";

function Wind(props) {

  const { widthSize, heightSize, displaySensors } = props;

  const [sensors, setSensors] = useState([]);
  const [angle, setAngle] =useState(0);

  async function getSensors() {
    const list = await Promise.all(displaySensors.map(async sensor => {
      const reading = await getReading(sensor.id)
      sensor.reading = reading;
      if (sensor.name === 'direction'){
        setAngle(reading)
      }
      return sensor
    }));
    setSensors(list);
  };
  


  async function getReading(id) {
    const reading = await Sensor.getReading(id)
    return Math.round(reading.value)
  };

  useEffect(() => {
    if (displaySensors) {
      getSensors();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displaySensors]);

  return (
    <View style={styles.body}>
      <View>

        <Text style={styles.header}>Wind</Text>
        {sensors ? (
          <>
            {sensors.map((sensor, index) => (
              <Text key={index} style={styles.textStyle}> {sensor.name}: {sensor.reading}  
              </Text>
            ))}
          </>
        ) : (
            <Text style={styles.textStyle}> No Sensor</Text>)}
      </View>
      <View>
        <Image source={require('../../image/compass.png')}
          style={{
            width: widthSize,
            height: heightSize,
          }} />
          {angle ? (

        <Image source={require('../../image/arrow.jpg')} style={{
          position: 'absolute',
          zIndex: -1,
          height: heightSize,
          width: widthSize,
          transform: [{ rotate: `${angle}deg` }]
          }} 
          />
          ) : null}
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
  image: {
    position: 'absolute',
    // left:
    zIndex: -1,
    height: 90,
    width: 100,
    transform: [{ rotate: '90deg' }]

  }
});

export default Wind;