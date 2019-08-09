import React, { Component } from "react";
import { TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";

class ButtonCalculator extends Component {
  render() {
    const { operator, handleButtonPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={() => handleButtonPress(operator)}
      >
        <Text style={styles.TextStyle}>{operator}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ButtonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#669999",
    margin: 1
  },
  TextStyle: {
    color: "#FFFFFF",
    fontSize: 20
  }
});
export default ButtonCalculator;
