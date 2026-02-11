import React from "react";
import { StyleSheet, View, Text } from "react-native";
import OlaMundo from "./components/OlaMundo";

export default function App(){
  return(
    <View style={styles.container}>
      <OlaMundo nome = "Rafael Marinho
      "/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});