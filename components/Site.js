import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as RootNavigation from './partials/RootNavigations';

import { Display } from "../js/request";
import styles from '../styles/styles';


import Temperature from './ganges/Temperature';
import Rain from './ganges/Rain';
import Humidity from './ganges/Humidity';
import Wind from './ganges/Wind';
import Pressure from './ganges/Pressure';

function Site(props) {

  const [siteSensors, setSiteSensors] = useState([]);

  async function getSiteSensors() {
    const getSensors = await Display.getDisplaySensors('site');
    console.log("getSiteSensors -> getSensors", getSensors);
    setSiteSensors(getSensors);
  };

  useEffect(() => {
    getSiteSensors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.body}>
      <ScrollView>

        <Text style={styles.header}>
          {siteSensors ? (
            <> {siteSensors.site} </>
          ) : (<>
            Site </>
            )}
        </Text>
        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'inside', id: siteSensors.temperatureInside }, { name: 'outside', id: siteSensors.temperatureOutside }]
          })}>

            <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'inside', id: siteSensors.temperatureInside }, { name: 'outside', id: siteSensors.temperatureOutside }]} />

          </TouchableOpacity>

        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'Rainfall', id: siteSensors.rainfallSensor }]
          })}>

            <Rain widthSize={150} heightSize={150} displaySensors={siteSensors.rainfallSensor} />
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'inside', id: siteSensors.humidilyInside }, { name: 'outside', id: siteSensors.humidilyOutside }]
          })}>
            <Humidity widthSize={150} heightSize={150} displaySensors={[{ name: 'inside', id: siteSensors.humidilyInside }, { name: 'outside', id: siteSensors.humidilyOutside }]} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'Direction', id: siteSensors.windDirection }, { name: 'Speed', id: siteSensors.windSpeed }]
          })}>
            <Wind widthSize={150} heightSize={150} displaySensors={[{ name: 'direction', id: siteSensors.windDirection }, { name: 'speed', id: siteSensors.windSpeed }]} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => RootNavigation.navigate('Chart', {
            sensors:
              [{ name: 'pressure', id: siteSensors.pressureSensor  }]
          })}>
            <Pressure widthSize={175} heightSize={110} displaySensors={{ name: 'pressure', id: siteSensors.pressureSensor }} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

export default Site;
