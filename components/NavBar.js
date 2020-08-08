import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

function Navbar(props) {
  const [hidden, setHidden] = useState(true)

  function handlePress() {
    setHidden((hidden === true) ? false : true)
   };

  return (
    <View>

      <View style={styles.body}>
        <Text>
          Weather_App
      </Text>
        <Text>
          <Text style={styles.text} onPress={handlePress}> Menu</Text>
        </Text>
      </View>
      {!hidden ? (
        <View style={styles.menu}>
          <Text style={styles.menuItem}> Site</Text>
          <Text style={styles.menuItem}> Inside </Text>
          <Text style={styles.menuItem}> Outside</Text>
          <Text style={styles.menuItem}> Sign In</Text>
        </View>
      ) : null}

    </View>
  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#3e517a',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 30,
  },
  text: {
    textAlign: 'right'
  },
  menu: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#3e517a6c',
  },
  menuItem: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    width: "100%"
  },
});

export default Navbar;