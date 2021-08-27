import React from "react";
import "../../css/bootstrap-5.0.2-dist/bootstrap.css";
import styled from "styled-components";
import { BsBackspaceReverseFill } from "react-icons/bs";

const Btn = styled.div`
  border: 3px solid white;
  border-radius: 1rem;
`;

const Keypad = ({ onClickBtn, onClickClear, onClickBackspace }) => {
  return (
    <div id="keypad">
      <div className="row">
        <Btn className="col-sm-3 text-center text-white bg-danger bg-gradient " onClick={() => onClickClear()}>
          <p className="fs-1">C</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-danger bg-gradient" onClick={() => onClickBackspace()}>
          <p className="fs-1">
            <BsBackspaceReverseFill />
          </p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-danger bg-gradient" onClick={() => onClickBtn("%")}>
          <p className="fs-1">%</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-warning bg-gradient" onClick={() => onClickBtn("x")}>
          <p className="fs-1">x</p>
        </Btn>
      </div>
      <div className="row">
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient  " onClick={() => onClickBtn("7")}>
          <p className="fs-1">7</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient  " onClick={() => onClickBtn("8")}>
          <p className="fs-1">8</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("9")}>
          <p className="fs-1">9</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-warning bg-gradient" onClick={() => onClickBtn("/")}>
          <p className="fs-1">&divide;</p>
        </Btn>
      </div>
      <div className="row">
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("4")}>
          <p className="fs-1">4</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("5")}>
          <p className="fs-1">5</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("6")}>
          <p className="fs-1">6</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-warning bg-gradient" onClick={() => onClickBtn("-")}>
          <p className="fs-1">-</p>
        </Btn>
      </div>
      <div className="row">
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("1")}>
          <p className="fs-1">1</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("2")}>
          <p className="fs-1">2</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("3")}>
          <p className="fs-1">3</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-warning bg-gradient" onClick={() => onClickBtn("+")}>
          <p className="fs-1">+</p>
        </Btn>
      </div>
      <div className="row">
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("+/-")}>
          <p className="fs-1">+/-</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn("0")}>
          <p className="fs-1">0</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-dark bg-gradient " onClick={() => onClickBtn(".")}>
          <p className="fs-1">.</p>
        </Btn>
        <Btn className="col-sm-3 text-center text-white bg-warning bg-gradient" onClick={() => onClickBtn("=")}>
          <p className="fs-1">=</p>
        </Btn>
      </div>
    </div>
  );
};

export default Keypad;
