import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import History from './History'; // Import the History component
import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    darkMode: false,
    history: [],
  };

  handleClick = buttonName => {
    if (buttonName === '=') {
      const { total, next, operation } = this.state;
      const result = calculate({ total, next, operation }, buttonName);
      this.setState(prevState => ({
        history: [...prevState.history, `${prevState.total || 0} ${prevState.operation || ''} ${prevState.next || 0} = ${result.total}`],
        ...result,
      }));
    } else if (buttonName === 'Backspace') {
      const { next } = this.state;
      if (next) {
        this.setState({ next: next.slice(0, -1) });
      }
    } else {
      const { total, next, operation } = this.state;
      const newState = calculate({ total, next, operation }, buttonName);
      this.setState(newState);
    }
  };

  handleDarkModeToggle = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { next, total, operation, darkMode, history } = this.state;
    const displayValue = next || total || "0";
    return (
      <div className={`component-app ${darkMode ? "dark-mode" : ""}`}>
        <div className="component-display-container">
          <Display value={displayValue} />
        </div>
        <div className="toggle-container">
          <button onClick={this.handleDarkModeToggle}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <ButtonPanel clickHandler={this.handleClick} />
        <History history={history} /> {/* Render the History component */}
      </div>
    );
  }
}
