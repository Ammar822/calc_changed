import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    darkMode: false, // Add darkMode state
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  handleDarkModeToggle = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { next, total, operation, darkMode } = this.state;
    const displayValue = next || total || "0";
    return (
      <div className={`component-app ${darkMode ? "dark-mode" : ""}`}>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" onChange={this.handleDarkModeToggle} checked={darkMode} />
            <span className="slider round"></span>
          </label>
        </div>
        <Display value={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
