import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      celsius: '',
      fahrenheit: '',
      kelvin: '',
    };
  }

  handleInputChange = (e, unit) => {
    const value = e.target.value;
    this.setState({ [unit]: value }, () => this.convertTemperature(unit, value));
  };

  convertTemperature = (unit, value) => {
    switch (unit) {
      case 'celsius':
        this.setState({
          fahrenheit: (value * 9) / 5 + 32,
          kelvin: value * 1 + 273.15,
        });
        break;
      case 'fahrenheit':
        this.setState({
          celsius: ((value - 32) * 5) / 9,
          kelvin: ((value - 32) * 5) / 9 + 273.15,
        });
        break;
      case 'kelvin':
        this.setState({
          celsius: value - 273.15,
          fahrenheit: (value - 273.15) * 1.8 + 32,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="temperature-converter">
        <h1>Temperature Converter</h1>
        <div className="input-group">
          <input
            type="number"
            placeholder="Celsius"
            value={this.state.celsius}
            onChange={(e) => this.handleInputChange(e, 'celsius')}
          />
          <input
            type="number"
            placeholder="Fahrenheit"
            value={this.state.fahrenheit}
            onChange={(e) => this.handleInputChange(e, 'fahrenheit')}
          />
          <input
            type="number"
            placeholder="Kelvin"
            value={this.state.kelvin}
            onChange={(e) => this.handleInputChange(e, 'kelvin')}
          />
        </div>
        
      </div>
      
    );
  }
}

export default App;

