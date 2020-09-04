import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Line from './charts/Line'
import Bar from './charts/Bar'
import styles from '../styles/styles';

import chartStyles from '../styles/chartStyles'

import { Sensor } from '../js/request';



function Chart(props) {
  // console.log("Chart -> props", props.route.params);

  const sensors = [{ name: 'inside', id: 20 }, { name: 'outside', id: 27 }]// props.route.params.sensors

  const [active, setActive] = useState({ name: sensors[0].name, id: sensors[0].id, chart: 'line', type: '' });
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
      active.type = sensorInfo.type
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
      console.error("getData ", error.message);
    }
  }

  function changePeriod() {
    getData(active.id, currentPeriod);
  }

  // useEffect(() => {
  //   console.log("Chart -> sensors", sensors);
  //   if (sensors) {
  //     setActive({ name: sensors[0].name, id: sensors[0].id, chart: 'line', type: '' })
  //   }
  // }, [sensors]);

  useEffect(() => {
    let unmounted = false;
    if (active.id !== undefined) {
      setLoading(true)
      getSensor(active.id, 1);
    }
    return () => { unmounted = true };
  }, [active]);

  useEffect(() => {
    changePeriod()
  }, [currentPeriod])

  return (
    <View style={styles.mainBody}>
      <ScrollView>


        <View style={chartStyles.buttonView}>

          <Text style={chartStyles.header}> {active.type} </Text>
          {sensors.map(sensor => (
            <TouchableOpacity
              key={'button', sensor.id}
              onPress={() => setActive({ name: sensor.name, id: sensor.id })}
              style={active.name === sensor.name ? chartStyles.active : chartStyles.inactive}>

              <Text style={chartStyles.buttonText}> {sensor.name}</Text>

            </TouchableOpacity>
          ))}

        </View>

        <View style={chartStyles.periodDiv}>
          {timePeriods.map((time, index) => (
            <TouchableOpacity key={index} 
            onPress={() => setCurrentPeriod(time.period)}
            style={currentPeriod === time.period ? chartStyles.periodButtonActive : chartStyles.periodButton}
            >

              <Text style={chartStyles.buttonText} > {time.name} </Text>

            </TouchableOpacity>
          ))}
        </View>

        <View style={{ minHeight: 400 }}>
          {active ? (
            <>
              {
                active.chart === 'line' ? (
                  <Line sensor={active} data={data} period={currentPeriod} />
                ) : (
                    <Bar sensor={active} data={data} period={currentPeriod} />
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