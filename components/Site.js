import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Display } from "../js/request";

import Temperature from './ganges/Temperature';
import Rain from './ganges/Rain';
import Humidity from './ganges/Humidity';
import Wind from './ganges/Wind';

function Site(props) {

  const [siteSensors, setSiteSensors] = useState([]);

  async function getSiteSensors() {
    const getSensors = await Display.getDisplaySensors('site');
    console.log("getSiteSensors -> getSensors", getSensors);
    setSiteSensors(getSensors);
    console.log("getSiteSensors -> getSensors", getSensors);
  };

  useEffect(() => {
    getSiteSensors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.body}>
      <ScrollView>
        <Text style={styles.header}>Site Name</Text>
        <View>
          <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'inside', id: siteSensors.temperatureInside }, { name: 'outside', id: siteSensors.temperatureOutside }]} />
        </View>
        <View>
          <Rain widthSize={150} heightSize={150} displaySensors={siteSensors.rainfallSensor} />
        </View>
        <View>
          <Humidity widthSize={150} heightSize={150} displaySensors={[{ name: 'inside', id: siteSensors.humidilyInside }, { name: 'outside', id: siteSensors.humidilyOutside }]} />
        </View>
        <View>
          <Wind widthSize={150} heightSize={150} displaySensors={[{ name: 'direction', id: siteSensors.windDirection }, { name: 'speed', id: siteSensors.windSpeed }]} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    fontSize: 24,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Site;
