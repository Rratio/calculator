import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Result extends Component {
  render() {
    const { result, refresh } = this.props;

    return (
      <View>
        <View style={styles.ViewStyle}>
          <Text style={styles.TextStyle}>{result}</Text>
        </View>

        <View style={styles.ViewContainer}>
          <TouchableOpacity onPress={refresh}>
            <Text style={styles.delete}>
              {/* ⏎ */}
              AC
            </Text>
          </TouchableOpacity>

          <Text style={styles.value} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    alignItems: "flex-end",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginTop: 25,
    paddingVertical: 25,
    paddingRight: 10,
    margin: 1
  },
  TextStyle: {
    color: "#fff",
    fontSize: 42
  },

  ViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#669999",
    paddingVertical: 10,
    paddingHorizontal: 5
  },

  delete: {
    color: "rgba(255, 255, 255, 2)",
    fontSize: 23,
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  value: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    padding: 3
  }
});

export default Result;
