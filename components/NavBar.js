import React, { useState } from "react";
import { Text, View,  TouchableOpacity } from "react-native";
import * as RootNavigation from './partials/RootNavigations';

import styles from '../styles/styles';


function Navbar(props) {
  // const [hidden, setHidden] = useState(true);

  // function handlePress() {
  //   setHidden((hidden === true) ? false : true)
  // };

  // function route(location) {
  //   RootNavigation.navigate(location);
  //   setHidden((hidden === true) ? false : true);
  // }

  return (
    <View>

      <View style={styles.bar}>
        <Text style={styles.navBarText}>
          Weather_App
      </Text>
        <Text style={styles.navBarText}>
          <Text style={styles.text}>Menu</Text>
        </Text>


       </View>
  {/*    {!hidden ? (
        <View style={styles.menu}>

          <TouchableOpacity onPress={() => route('Home')} style={styles.button}>
            <Text style={styles.buttonText}>Home </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => route('Site')} style={styles.button}>
            <Text style={styles.buttonText}>Site </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => route('Outside')} style={styles.button}>
            <Text style={styles.buttonText}>Outside </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => route('Inside')} style={styles.button}>
            <Text style={styles.buttonText}>Inside </Text>
          </TouchableOpacity>
        </View>
      ) : null}
*/}
    </View> 
  );
};

export default Navbar;