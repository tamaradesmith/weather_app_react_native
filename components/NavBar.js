import React from "react";
import { Text, View } from "react-native";
import styles from '../styles/styles';

function Navbar(props) {

  return (
    <View style={styles.bar}>
      <Text style={styles.navBarText}>
        Weather_App
      </Text>
      <Text style={styles.navBarText}>
        <Text style={styles.textNav}>{props.site}</Text>
      </Text>
    </View>
  );
};

export default Navbar;