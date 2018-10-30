import React, { Component } from 'react';
import './App.css';

class chooseBackgroundColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "red",
    };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changeBackgroundColor(event) {
    this.setState({backgroundColor: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={this.state}>
          <div className="select-box">
            <select value={this.state.value} onChange={this.changeBackgroundColor}>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="aquamarine">Aquamarine</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </header>
      </div>
    );
  }
}

export default chooseBackgroundColor;
