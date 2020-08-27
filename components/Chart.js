import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Line from './charts/Line'
import BarChart from './charts/BarChart'
import styles from '../styles/styles';

import chartStyles from '../styles/chartStyles'

import { Sensor } from '../js/request';



function Chart(props) {

  const [active, setActive] = useState({});
  const [data, setData] = useState([]);

  const sensors = props.route.params.sensors;

  async function getSensor(id) {
    try {
      const sensorInfo = await Sensor.getSensor(id);
      const sensor = active;
      const chart = (sensorInfo.chart) ? sensorInfo.chart : "line";
      // sensor.chart = 'line';
      setActive(sensor);
      getData(id);
    } catch (error) {
      console.error(error.message);
    }
  };

  async function getData(id) {
    try {
      const readings = await Sensor.getReadings(id, 1);
      setData(readings);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (sensors){
      setActive({ name: sensors[0].name, id: sensors[0].id })
    }
  }, [sensors]);

  useEffect(() => {
    if (active.id !== undefined){
      getSensor(active.id);
    }
  }, [active]);



  return (
    <View style={styles.mainBody}>
      <ScrollView>

        <Text style={styles.header}> {active.name} </Text>
        <View style={chartStyles.buttonView}>

          {sensors.map(sensor => (
            <TouchableOpacity key={'button', sensor.id} onPress={() => setActive({ name: sensor.name, id: sensor.id })} style={active.name === sensor.name ? chartStyles.active : chartStyles.inactive}>
              <Text style={chartStyles.buttonText}> {sensor.name}</Text>
            </TouchableOpacity>
          ))}

        </View>

        <View>

          <Text> <Line sensor={active} data={data} /> </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chart;