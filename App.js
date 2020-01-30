import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import {Button} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

var itemArray = new Array(25).fill("empty");

export default function App() {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber = ""
    };
  }







  return (
    <View style={styles.container}>
      <Text>Scartch and Win </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
