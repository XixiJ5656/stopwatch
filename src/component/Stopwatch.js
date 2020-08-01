import React, { Component } from "react";
import "../App.css";
export default class Stopwatch extends Component {
  state = {
    timer: 0,
  };

  handleReset = () => {
    this.handlePause();
    this.setState({ timer: 0 });
  };

  changeTimer = () => {
    this.setState({ timer: this.state.timer + 1 });
  };
  handleStart = () => {
    this.timeIncrease = setInterval(this.changeTimer, 1000);
  };

  handlePause = () => {
    clearInterval(this.timeIncrease);
  };
  render() {
    return (
      <div>
        <p className="display">{this.state.timer} s</p>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}
