import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Display } from "../js/request";

import Temperature from './ganges/Temperature';
import Humidity from './ganges/Humidity';
import AirQuality from './ganges/AirQuality';


function Inside(props) {
  const [siteSensors, setSiteSensors] = useState([]);

  async function getSiteSensors() {
    const getSensors = await Display.getDisplaySensors('inside');
    setSiteSensors(getSensors);
  };

  useEffect(() => {
    getSiteSensors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (

    <View style={styles.body}>
      <ScrollView>
        <Text style={styles.header}>Inside</Text>
        <View>
          <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'main', id: siteSensors.temperatureMain }, { name: 'bedroom', id: siteSensors.temperatureBedroom }]} />
        </View>

        <View>
          <Humidity widthSize={150} heightSize={150} displaySensors={[{ name: 'humidily', id: siteSensors.humidily }]} flexDirection={'row-reverse'} />
        </View>
        <View>
          <AirQuality widthSize={200} heightSize={100} displaySensors={{ name: 'CO', id: siteSensors.co }}  />
        </View>
        <View>
          <AirQuality widthSize={200} heightSize={100} displaySensors={{ name: 'particule', id: siteSensors.particule }} flexDirection={'row-reverse'} />
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
    // flexDirection: 'row-reverse'
  },
});


export default Inside;
