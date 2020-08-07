import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Menu from "./partials/Menu"

function Navbar(props) {
  return (
    <View style={styles.body}>

      <Text>
        Weather_App
      </Text>
      <Text>
        {/* Menu */}
        <Menu />
      </Text>
    </View>
  );
};




const styles = StyleSheet.create({
  body: {
    backgroundColor: 'green',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 30,
  },
});
export default Navbar;