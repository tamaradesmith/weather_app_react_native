import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/styles';

function Home(props) {
  console.log("Home -> props", props);

  return (
    <View style={styles.mainBody}>
      <View>
        <Text style={styles.header}> Weather App</Text>
      </View>

      <View style={{ width: 300, marginHorizontal: 'auto', alignSelf: "center", marginTop: 50, }}>
        <LinearGradient
          colors={['#3e517a00', '#3e517a']}>
          <Image source={require('../image/rainfall.png')} style={{
            width: 300,
            height: 300,
            alignContent: 'center',
          }} />
        </LinearGradient>
      </View>

      <View>

        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')} style={styles.button}>
          <Text style={styles.buttonText}>SignIn </Text>
        </TouchableOpacity>

      </View>
        <Text style={styles.textStyle, styles.centre}> Guest </Text>

    </View>
  );
};

export default Home