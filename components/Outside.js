import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import * as RootNavigation from './partials/RootNavigations';

import { Display } from "../js/request";
import styles from '../styles/styles';

import Temperature from './ganges/Temperature';
import Rain from './ganges/Rain';
import Humidity from './ganges/Humidity';
import Wind from './ganges/Wind';
import SkyColour from './ganges/SkyColour';

function Outside(props) {

  const [siteSensors, setSiteSensors] = useState([]);

  async function getSiteSensors() {
    const getSensors = await Display.getDisplaySensors('outside');
    setSiteSensors(getSensors);
  };

  useEffect(() => {
    getSiteSensors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <View style={styles.body}>
      <ScrollView>
        <Text style={styles.header}>Outside  </Text>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'main', id: siteSensors.temperatureOutside }, { name: 'shade', id: siteSensors.temperatureShade }]
          })}>

            <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'main', id: siteSensors.temperatureOutside }, { name: 'shade', id: siteSensors.temperatureShade }]} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'rain', id: siteSensors.rainfallSensor }]
          })}>
            <Rain widthSize={150} heightSize={150} displaySensors={siteSensors.rainfallSensor} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'humidily', id: siteSensors.humidily }]
          })}>
            <Humidity widthSize={150} heightSize={150} displaySensors={[{ name: 'humidily', id: siteSensors.humidily }]} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'direction', id: siteSensors.windDirection }, { name: 'speed', id: siteSensors.windSpeed }]
          })}>
            <Wind widthSize={150} heightSize={150} displaySensors={[{ name: 'direction', id: siteSensors.windDirection }, { name: 'speed', id: siteSensors.windSpeed }]} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'blue', id: siteSensors.skyBlue }, { name: 'red', id: siteSensors.skyRed }, { name: 'green', id: siteSensors.skyGreen }]
          })}>
            <SkyColour widthSize={200} heightSize={100} displaySensors={[{ name: 'blue', id: siteSensors.skyBlue }, { name: 'red', id: siteSensors.skyRed }, { name: 'green', id: siteSensors.skyGreen }]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Outside;