import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from '../../styles/styles';

import { User } from '../../js/request';

function Login(props) {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user', value.userName)
      await AsyncStorage.setItem('site', value.site)
    } catch (error) {
      console.error("stroe Data: ", error.message);
    };
  };

  async function handleLogin() {
    const user = { username: userName, password: password }
    const result = await User.login(user);
    if (!result.result) {
      setErrorMessage(result.message, "***");
    } else {
      const site = await User.getUserSite()
      await storeData({ userName, site: site[0].name });
      setErrorMessage('');
      props.route.params.updateSite(site[0].name)
      props.route.params.onNavigateBack();
      props.navigation.navigate('Home1')
    };
  };

  return (
    <View style={styles.mainBody}>

      <Text style={styles.error}> {errorMessage} </Text>

      <Text style={styles.labelField}> Username: </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Your Username"
        onChangeText={text => setUserName(text)}
      />

      <Text style={styles.labelField}> Password: </Text>
      <TextInput
        style={styles.textField}
        onChangeText={text => setPassword(text)}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        password={true}
      />

      <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
        <Text style={styles.buttonText}> Log In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;