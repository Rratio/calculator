import React, { Component } from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ButtonDetails from "./components/ButtonDetails";
import Result from "./components/Result";

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      result: 0
    };
  }
  refresh() {
    this.setState({ result: 0 });
  }

  handleButtonPress(button) {
    debugger;
    let oldinput = this.state.result,
      lastLetter;
    if (oldinput == 0) {
      oldinput = "";
    }

    switch (button) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState({
          result: oldinput + button
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        lastLetter = oldinput.slice(-1);
        if (
          lastLetter === "+" ||
          lastLetter === "-" ||
          lastLetter === "*" ||
          lastLetter === "/"
        )
          this.setState({
            result: oldinput.slice(0, -1) + button
          });
        else
          this.setState({
            result: oldinput + button
          });
        break;
      case "=":
        try {
          this.setState({
            // eslint-disable-next-line no-eval
            result: eval(this.state.result) + ""
          });
        } catch (e) {
          this.setState({ result: "NaN" });
        }
        break;
      case ".":
        lastLetter = oldinput.slice(-1);
        if (lastLetter !== ".") {
          this.setState({
            result: oldinput + button
          });
        }
        break;
    }
  }

  render() {
    const { result } = this.state;

    return (
      <LinearGradient colors={["#00ffff", "#ffffcc"]} style={styles.container}>
        <Result result={result} refresh={this.refresh.bind(this)} />

        <ButtonDetails handleButtonPress={this.handleButtonPress.bind(this)} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
