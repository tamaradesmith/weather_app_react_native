import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/styles';

function Home(props) {

  const [user, setUser] = useState('')


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      setUser(value !== null ? value : 'guest')
      return value;
    } catch (e) {
      // error reading value
    }
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser('guest')
    } catch (e) {
      // remove error
    }
    console.log('Done.')
  }


  const handleLogout = async () => {
    removeValue();
  };

  useEffect(() => {
    getData()
  }, [user])

  return (
    <View style={styles.mainBody}>
      <View>
        <Text style={styles.homeHeader}> Weather App</Text>
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
      <Text style={styles.userText}> {user} </Text>

      <View>
        {user === 'guest' ? (

          <TouchableOpacity onPress={() => props.navigation.navigate('Login',
            {
              onNavigateBack: () => { setUser('new')},
            })} 
            style={styles.buttonSubmit}
            >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={handleLogout} style={styles.buttonSubmit}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          )}

      </View>

    </View>
  );
};

export default Home