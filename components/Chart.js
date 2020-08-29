import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Line from './charts/Line'
import Bar from './charts/Bar'
import styles from '../styles/styles';

import chartStyles from '../styles/chartStyles'

import { Sensor } from '../js/request';



function Chart(props) {

  const sensors = props.route.params.sensors;

  const [active, setActive] = useState({});
  const [data, setData] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState(1);
  const [loading, setLoading] = useState(true)

  const timePeriods = [{ name: 'day', period: 1 }, { name: 'week', period: 7 }, { name: 'month', period: 30 }, { name: 'year', period: 365 }]

  async function getSensor(id, period) {
    try {
      const sensorInfo = await Sensor.getSensor(id);
      const sensor = active;
      let chart;
      if (sensorInfo.mix) {
        chart = sensorInfo.mix;
      } else {
        chart = (sensorInfo.chart) ? sensorInfo.chart : "line";
      }
      active.chart = chart;
      // setActive(sensor);
      getData(id, period);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {
      console.error(error.message);
    }
  };

  async function getData(id, period) {
    try {
      const readings = await Sensor.getReadings(id, period);
      setData(readings);
    } catch (error) {
      console.error(error.message);
    }
  }

  function handlePeriod(period) {
    if (!loading) {
      console.log("handlePeriod -> period", period);
      alert(period)
    }
    // setCurrentPeriod(period);
    // getData(active.id, period);
  }

  useEffect(() => {
    console.log('sensors')
    if (sensors) {
      setActive({ name: sensors[0].name, id: sensors[0].id, chart: 'line' })
    }
  }, [sensors]);

  useEffect(() => {
    console.log('active')
    if (active.id !== undefined) {
      setLoading(true)
      getSensor(active.id, 1);
    }
  }, [active]);

  console.log(active.chart === 'line')

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
          {timePeriods.map((time, index) => (
            <TouchableOpacity key={index} onPress={handlePeriod(time.period)} >
              <Text style={chartStyles.buttonView}> {time.name} </Text>

            </TouchableOpacity>
          ))}
        </View>

        <View style={{ minHeight: 400 }}>
          {active ? (
            <>
              {
                active.chart === 'line' ? (
                  <Line sensor={active} data={data} />
                ) : (
                    <Bar sensor={active} data={data} />
                  )
              }
            </>) : (
              <Text> Loading </Text>
            )}
        </View>



        <Text style={{ minHeight: 50 }}></Text>

      </ScrollView>
    </View>
  );
};

export default Chart;