import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import LineChart from './charts/LineChart'
import styles from '../styles/styles';

import chartStyles from '../styles/chartStyles'

function Chart(props) {

  const [active, setActive] = useState('');

  const sensors = props.route.params.sensors;


  useEffect(() => {
    setActive(sensors[0].name)
  }, [sensors])


  return (
    <View>
      <Text style={styles.header}> {active} </Text>
      <View style={chartStyles.buttonView}>
        {sensors.map(sensor => (
          <TouchableOpacity key={sensor.id} onPress={() => setActive(sensor.name)} style={active === sensor.name ? chartStyles.active : chartStyles.inactive}>
            <Text style={chartStyles.buttonText}> {sensor.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Text> <LineChart /> </Text>
      </View>
    </View>
  );
};

export default Chart;