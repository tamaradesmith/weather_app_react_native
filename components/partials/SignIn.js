import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import styles from '../../styles/styles';


function SignIn(props){


async  function handleLogin(){

}

  return (
    <View>
      <Text style={styles.labelField}> Username: </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Your Username"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />

      <Text style={styles.labelField}> Password: </Text>
      <TextInput
        style={styles.textField}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        password={true}
      />

      <Button title={"Submit"} style={styles.buttonSubmit} onPress={handleLogin}> </Button>
    </View>
  );
};

export default SignIn;