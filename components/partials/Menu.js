import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Menu(props) {
  const [hidden, setHidden] = useState(styles.display)
  function handlePress() {
  setHidden ( hidden === styles.display ? styles.show : styles.display)
  }
  return (
    <View style={styles.body}>

      <Text style={styles.text} > Menu</Text>
      <View id="menu" style={styles.menu, hidden}
        onPress={handlePress}>
        <Text style={styles.menuItem}> meowss</Text>
        <Text style={styles.menuItem}> meowss </Text>
        <Text style={styles.menuItem}> meows</Text>
        <Text style={styles.menuItem}> meows</Text>
        <Text style={styles.menuItem}> meows</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    minWidth: 100,
    padding: 10,
    // borderColor: "black",
    // borderWidth: 3,
    // backgroundColor: "yellow",
  },
  text: {
    textAlign: 'right'
  },
  display: {
    display: "none"
  },
  show: {
    // display: ""
  },
  menu: {
    minWidth: 100,
    borderColor: "black",
    borderWidth: 1,
    position: 'absolute',
    left: 0,
    top: 30,
    backgroundColor: "purple",
    // padding: 5,
    zIndex: 4,
  },
  menuItem: {
    textAlign: 'right',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
  },
})
export default Menu;