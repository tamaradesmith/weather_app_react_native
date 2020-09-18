import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/styles';

function Home(props) {
  console.log("Home -> props", props.route);

  const [user, setUser] = useState('');

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('site');
      setUser('guest');
      props.route.params.updateSite('')
    } catch (error) {
     console.error("remove Value : ", error.message );
    };
  };

  const handleUser = () => {
    setUser('new');
  }

  const handleLogout = async () => {
    removeValue();
  };

  useEffect(() => {
    let isCancelled = false;

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user')
        const site = await AsyncStorage.getItem('site')
        if (!isCancelled) {
          setUser(value !== null ? value : 'guest');
        }
      } catch (error) {
        if (!isCancelled)
          console.error(({ error: error.message }));
      }
    }
    getData();
    return () => {
      isCancelled = true;
    };
  }, [user]);

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
              onNavigateBack: () => { handleUser() },
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