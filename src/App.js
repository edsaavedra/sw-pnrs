import React, { Component } from 'react';
import './App.scss';

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleChange() {}
  selectedValue() {}

  valuetext(value) {
    return `${value}°C`;
  }

  render() {
    return (
      <section className="App">
        <h1 className="title">Lorem ipsum dolo</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae.</p>
        <form className="form">

          <div className="field roundtrip">
            <span className="field-title">Trip Type</span>
            <label for="roundtrip">
              <input type="radio" name="triptype" value="roundtrip" id="roundtrip"/>
              <span className="roundtrip">Round Trip</span>
            </label>
            <label for="oneway">
              <input type="radio" name="triptype" value="oneway" id="oneway"/>
              <span className="oneway">One Way</span>
            </label>
            <label for="multicity">
              <input type="radio" name="triptype" value="multicity" id="multicity"/>
              <span className="multicity">Multy City</span>
            </label>
          </div>

          <div className="field passangers">
            <label for="passengers">
              <span className="field-title">Passengers</span>
              <input type="range" min="1" max="8" value="1" id="passengers" className="range"/>
            </label>
          </div>

          <div className="field payment">
            <label for="payment">
             <span className="field-title">Payment</span>
              <span className="payment">Dollars</span>
              <div className="switch">
                <input type="checkbox" value="1" id="payment"/>
                <span className="slider"></span>
              </div>
              <span className="payment">Points</span>
            </label>
          </div>

          <input type="button" className="submit" value="Go"/>
        </form>
      </section>
    );
  }
}

export default App;

