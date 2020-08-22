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
            [{ name: 'inside', id: siteSensors.temperatureInside }, { name: 'outside', id: siteSensors.temperatureOutside }]}
          )
          }>

            <Temperature widthSize={68} heightSize={300} displaySensors={[{ name: 'inside', id: siteSensors.temperatureInside }, { name: 'outside', id: siteSensors.temperatureOutside }]} />
          </TouchableOpacity>
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
      <View>
        <Pressure widthSize={175} heightSize={110} displaySensors={{ name: 'pressure', id: siteSensors.pressureSensor }} />
      </View>
      </ScrollView>
    </View >
  );
}

export default Site;
