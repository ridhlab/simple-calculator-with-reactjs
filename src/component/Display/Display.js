import React, { Component } from "react";
import "../../css/bootstrap-5.0.2-dist/bootstrap.css";
import styled from "styled-components";

const WrapperInput = styled.div`
  background-color: rgb(240, 240, 240);
  border-bottom: px solid white;
  border-left: 3px solid white;
  border-right: 3px solid white;
  height: 100px;
  border-radius: 2rem 2rem 2rem 2rem;
  margin-top: 0.5rem;
`;
const WrapperText = styled.div`
  border-left: 3px solid white;
  height: 20px;
  color: rgb(150, 150, 150);
  position: absolute;
`;
const WrapperHasil = styled.div`
  background-color: rgb(240, 240, 240);
  border-left: 3px solid white;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  height: 76px;
  border-radius: 2rem 2rem 2rem 2rem;
  margin-top: 1rem;
`;

export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="result">
        <WrapperText className="row  ">
          <div className="col-md-12 text-end d-flex align-items-end justify-content-start">
            <p className="fs-6 mb-0 ps-2 pt-1 ">Result</p>
          </div>
        </WrapperText>
        <WrapperHasil className="row">
          <div className="col-md-12 text-end d-flex align-items-end justify-content-end">
            <p className="fs-1 mb-0">{this.props.hasil}</p>
          </div>
        </WrapperHasil>
        <WrapperText className="row mt-2">
          <div className="col-md-12 text-end d-flex align-items-end justify-content-start">
            <p className="fs-6 mb-0 ps-2 pt-1">User input</p>
          </div>
        </WrapperText>
        <WrapperInput className="row mb-2">
          <div className="col-md-12 text-end d-flex align-items-end justify-content-end">
            <p className="fs-1 mb-0">{this.props.resultDisplay}</p>
          </div>
        </WrapperInput>
      </div>
    );
  }
}
