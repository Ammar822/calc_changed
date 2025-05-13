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
          <button onClick={this.handleDarkModeToggle}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <Display value={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
