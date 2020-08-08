import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Menu(props) {
  const [hidden, setHidden] = useState(true)

  function handlePress() {
    const mode = (hidden === true) ? false : true;
    setHidden(mode)
  };

  return (
    <View style={styles.body}>
      <Text ></Text>
      <Text style={styles.text} onPress={handlePress}> Menu</Text>

      {!hidden ? (
      <View style={styles.menu}>
        <Text style={styles.menuItem}> Site</Text>
        <Text style={styles.menuItem}> Inside </Text>
        <Text style={styles.menuItem}> Outside</Text>
        <Text style={styles.menuItem}> Sign In</Text>
      </View>
      ): null}


    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    minWidth: 100,
    padding: 10,
  },
  text: {
    textAlign: 'right'
  },
  test: {
  },
  hidden: {
    display: "none",
    backgroundColor: "red"
  },
  show: {
    display: "flex",
    backgroundColor: "yellow"
  },
  menu: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    zIndex: 2,
    position: 'absolute',
    left: 0,
    top: 50,
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    backgroundColor: '#fffcf2',
  },
  menuItem: {
    // textAlign: 'right',
    paddingVertical: 10,
    // paddingHorizontal: 5,
    borderBottomWidth: 1,
    width: "100%"
  },
})
export default Menu;