import React, { useState } from "react";
import ProgressBar from "./index";
import { Route, Link } from "react-router-dom";
class ProgressBarExample extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0
    };
  }

  setinputValue = inputValue => {
    this.setState({ inputValue });
  };

  stopTimer = () => {
    clearInterval(this.setTimer);
  };

  startTimer = () => {
    console.log("inside set interval");
    this.setTimer = setInterval(() => {
      const { inputValue } = this.state;
      this.setinputValue(inputValue + 3);
    }, 1000);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="progress-bar-example">
        <ProgressBar completionValue={inputValue} />
        <button className="btn btn-primary" onClick={this.startTimer}>
          Start
        </button>
        <button className="btn btn-danger" onClick={this.stopTimer}>
          Stop
        </button>
      </div>
    );
  }
}

export default () => (
  <>
    <Route path="/progressbar">
      <ProgressBarExample />
    </Route>
  </>
);
