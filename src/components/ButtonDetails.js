import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ButtonCalculator from "./ButtonCalculator";

class ButtonDetails extends Component {
  render() {
    const { handleButtonPress } = this.props;
    return (
      <View style={styles.viewStyle}>
        <View style={styles.rowStyle}>
          <ButtonCalculator
            operator={"7"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"8"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"9"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"*"}
            handleButtonPress={handleButtonPress}
          />
        </View>

        <View style={styles.rowStyle}>
          <ButtonCalculator
            operator={"4"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"5"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"6"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"-"}
            handleButtonPress={handleButtonPress}
          />
        </View>

        <View style={styles.rowStyle}>
          <ButtonCalculator
            operator={"1"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"2"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"3"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"+"}
            handleButtonPress={handleButtonPress}
          />
        </View>

        <View style={styles.rowStyle}>
          <ButtonCalculator
            operator={"0"}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"."}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"="}
            handleButtonPress={handleButtonPress}
          />
          <ButtonCalculator
            operator={"/"}
            handleButtonPress={handleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  },

  rowStyle: {
    flex: 1,
    flexDirection: "row"
  }
});

export default ButtonDetails;
