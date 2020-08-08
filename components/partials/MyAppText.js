import React from "react"
import { Text, StyleSheet } from "react-native"

function MyAppText(props) {
  return (
    <Text style={ styles.body }>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    color: "purple",
  }
})

export default MyAppText;