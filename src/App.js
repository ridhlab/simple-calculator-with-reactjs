import "./App.css";
import "./css/bootstrap-5.0.2-dist/bootstrap.css";
import styled from "styled-components";
import Keypad from "./component/Keypad/Keypad";
import Display from "./component/Display/Display";
import React, { Component } from "react";

const Container = styled.div`
  width: 600px;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      perhitungan: "0",
    };
  }

  onClickBackspace = () => {
    const { perhitungan } = this.state;
    const updatePerhitungan = perhitungan.substr(0, perhitungan.length - 1);
    if (perhitungan.length != 1) this.setState({ perhitungan: updatePerhitungan });
    if (perhitungan.length == 1) this.setState({ perhitungan: "0" });
  };

  onClickClear = () => {
    this.setState({ perhitungan: "0", hasil: 0 });
  };

  onClickBtn = (value) => {
    const { perhitungan } = this.state;
    const updatePerhitungan = String(perhitungan) + String(value);
    if (value == "=") {
      const hasilOperasi = this.hitung();
      this.setState({
        hasil: hasilOperasi,
      });
    }

    if (perhitungan == "0") {
      this.setState({ perhitungan: value });
    } else {
      if (value !== "=") this.setState({ perhitungan: updatePerhitungan });
    }
  };

  hitung = () => {
    const { perhitungan } = this.state;
    const splitChar = perhitungan.split("");
    let isOperator = false;
    let operator = "";
    let angkaTerbaru = "";
    let angkaPertama = "";
    let hasil = 0;
    let isHasil = false;
    for (var i = 0; i < splitChar.length; i++) {
      switch (splitChar[i]) {
        case "+":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "+";
          break;
        case "-":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "-";
          break;
        case "/":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "/";
          break;
        case "x":
          if (isHasil) {
            angkaPertama = hasil;
          } else {
            angkaPertama = angkaTerbaru;
          }
          angkaTerbaru = "";
          isOperator = true;
          operator = "*";
          break;
        default:
          if (angkaTerbaru === "") {
            angkaTerbaru = splitChar[i];
          } else {
            angkaTerbaru += splitChar[i];
          }

          if (isOperator === true) {
            if (operator === "+") {
              hasil = Number(angkaPertama) + Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "-") {
              hasil = Number(angkaPertama) - Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "*") {
              hasil = Number(angkaPertama) * Number(angkaTerbaru);
              isHasil = true;
            }
            if (operator === "/") {
              hasil = Number(angkaPertama) / Number(angkaTerbaru);
              isHasil = true;
            }
          }
      } //end switch
    } // end for

    return hasil;
  };

  render() {
    return (
      <Container className="">
        <Display resultDisplay={this.state.perhitungan} hasil={this.state.hasil} />
        <Keypad onClickBtn={this.onClickBtn} onClickClear={this.onClickClear} onClickBackspace={this.onClickBackspace} />
      </Container>
    );
  }
}
