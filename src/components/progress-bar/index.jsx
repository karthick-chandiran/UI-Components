import React, { Component } from "react";
import "./index.scss";

const styleObject = fillPercentage => ({
  width: fillPercentage + "%",
  display: fillPercentage ? "flex" : "none"
});
export default class ProgressBar extends Component {
  emptyBar = () => {
    return <div className={"progress-bar progress-bar-empty"}>0%</div>;
  };
  renderBars = remainingPercentage => {
    let progressBar = [];
    let fillPercentage;
    let limit = 40;
    if (remainingPercentage > limit) {
      fillPercentage = limit;
      remainingPercentage -= limit;
      console.log("remain", remainingPercentage);
    } else {
      fillPercentage = remainingPercentage;
      remainingPercentage = 0;
      console.log("remain", remainingPercentage, fillPercentage);
    }

    progressBar.push(
      <div
        className="progress-bar progress-bar-success progress-bar-striped"
        role="progressbar"
        style={styleObject(fillPercentage)}
      >
        {fillPercentage}%
      </div>
    );
    const sLimit = 10;
    if (remainingPercentage > sLimit) {
      fillPercentage = sLimit;
      remainingPercentage -= sLimit;
    } else {
      fillPercentage = remainingPercentage;
      remainingPercentage = 0;
    }
    progressBar.push(
      <div
        className="progress-bar progress-bar-warning progress-bar-striped"
        role="progressbar"
        style={styleObject(fillPercentage)}
      >
        {fillPercentage}%
      </div>
    );
    progressBar.push(
      <div
        className="progress-bar progress-bar-danger progress-bar-striped"
        role="progressbar"
        style={styleObject(remainingPercentage)}
      >
        {remainingPercentage}%
      </div>
    );
    return progressBar;
  };

  render() {
    let { completionValue } = this.props;

    return (
      <div className="progress">
        {completionValue === 0 && this.emptyBar()}
        {completionValue !== 0 && this.renderBars(completionValue)}
      </div>
    );
  }
}
