import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import {Button} from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

var itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: ""
    };
  }

  componentDidMount() {
    //call generaterandomnumber method below
    this.setState({randomNumber: this.generateRandomNumber()})
  };

  generateRandomNumber = () => {
    //generate random number
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({randomNumber: randomNumber, isScratched: true});
    return randomNumber;
  };

  scratchItem = (itemNumber) => {
    //decide lucky or unlucky
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = 'unlucky'
    }
    this.forceUpdate();
  };

  scratchItemIcon = (itemNumber) => {
    //decide icon based on if lucky or unlucky.
    if (itemArray[itemNumber] === 'lucky') {
      return "dollar";
    } else if (itemArray[itemNumber] === 'unlucky') {
      return 'frown-o'
    }
    return 'circle';
  };

  scratchItemColor = itemNumber => {
    //find right color
    if (itemArray[itemNumber] === 'lucky') {
      return "green";
    } else if (itemArray[itemNumber] === 'unlucky') {
      return 'red'
    }
    return 'black';
  };

  showAllItem = () => {
    //reveal all icons
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] == 'lucky';
    this.forceUpdate(); 
  };

  reset = () => {
    //resets the game
    this.setState({randomNumber: this.generateRandomNumber()},
      () => {
        itemArray.fill("empty");
        this.forceUpdate();
      } 
    )
  }

  render () {
    return (
      <View style={styles.container}>

        <View>
          <Text>Scartch and Win </Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemrow}>
            <TouchableOpacity
            style={styles.item}
            onPress= { () => {
              this.scratchItem(0)
            } }
            >
              <FontAwesome
                 name={this.scratchItemIcon(0)}
                 size={50}
                 color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
          </View>

        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
