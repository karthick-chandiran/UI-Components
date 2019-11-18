import React, { Component } from "react";

export default class ProgressBar extends Component {

  firstBar = (remainingPercentage) => {
    let fillPercentage
    let limit = 40
    if(remainingPercentage > limit){
      fillPercentage = limit
      remainingPercentage -= limit
    } else{
      fillPercentage = remainingPercentage
      remainingPercentage = 0
    }
    return (
      <div
        className="progress-bar progress-bar-success"
        role="progressbar"
        style={{width:{fillPercentage}+'%'}}
      >
        Free Spac
      </div>
    );
  };

  secondBar = (remainingPercentage) => {
    let fillPercentage
    const limit = 10
    if(remainingPercentage > limit){
      fillPercentage = limit
      remainingPercentage -= limit
    } else{
      fillPercentage = remainingPercentage
      remainingPercentage = 0
    }
    return (
      <div
      className="progress-bar progress-bar-warning"
      role="progressbar"
      style={{width:{fillPercentage}+'%'}}
    >
      Warning
    </div>
    );
  };

  thirdBar = (remainingPercentage) => {
    let fillPercentage
    const limit = 10
    if(limit && remainingPercentage > limit){
      fillPercentage = limit
      remainingPercentage -= limit
    } else{
      fillPercentage = remainingPercentage
      remainingPercentage = 0
    }
    return (
      <div
      className="progress-bar progress-bar-danger"
      role="progressbar"
      style={{width:{fillPercentage}+'%'}}
    >
      Danger
    </div>
    );
  };

  render() {
    let { completionValue } = this.props;

    return (
      <div className="progress">
        {this.firstBar(completionValue)}
        {this.secondBar(completionValue)}
        {this.thirdBar(completionValue)}

      </div>
    );
  }
}
