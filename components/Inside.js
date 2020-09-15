import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import * as RootNavigation from './partials/RootNavigations';

import { Display } from "../js/request";
import styles from '../styles/styles';

import Temperature from './ganges/Temperature';
import Humidity from './ganges/Humidity';
import AirQuality from './ganges/AirQuality';


function Inside(props) {
  const [siteSensors, setSiteSensors] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getSiteSensors = async () => {
      try {
        const getSensors = await Display.getDisplaySensors('inside');
        if (!isCancelled) {
          setSiteSensors(getSensors);
        };
      } catch (error) {
        if (!isCancelled) {
          console.error({ error: error.message });
        };
      };
    };
    getSiteSensors();
    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.body}>
      <ScrollView>
        <Text style={styles.header}>Inside</Text>
        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'main', id: siteSensors.temperatureMain }, { name: 'bedroom', id: siteSensors.temperatureBedroom }]
          })}>

            <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'main', id: siteSensors.temperatureMain }, { name: 'bedroom', id: siteSensors.temperatureBedroom }]} />

          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'humidily', id: siteSensors.humidily }]
          })}>
            <Humidity widthSize={150} heightSize={150} displaySensors={[{ name: 'humidily', id: siteSensors.humidily }]} flexDirection={'row-reverse'} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'CO', id: siteSensors.co }]
          })}>
            <AirQuality widthSize={200} heightSize={100} displaySensors={{ name: 'CO', id: siteSensors.co }} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'particule', id: siteSensors.particule }]
          })}>
            <AirQuality widthSize={200} heightSize={100} displaySensors={{ name: 'particule', id: siteSensors.particule }} flexDirection={'row-reverse'} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default Inside;
