import React, { Component } from 'react';
import './App.scss';
import Switch from './components/switch';
import Range from './components/range';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        passengers: 1,
        payment: false,
        tripType: "roundtrip"
      }
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const { form } = this.state;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    form[input.name] = value;
    this.setState({ form });
  }

  render() {
    const { tripType, passengers, payment } = this.state.form;
    return (
      <section className="App">
        <h1 className="title">Lorem ipsum dolo</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae.</p>
        <form className="form">

          <div className="field roundtrip">
            <span className="field-title">Trip Type</span>
            <label htmlFor="roundtrip">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === "roundtrip"}
                onChange={this.handleChange}
                id="roundtrip"/>
              <span className="roundtrip">Round Trip</span>
            </label>
            <label htmlFor="oneway">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={this.handleChange}
                id="oneway"/>
              <span className="oneway">One Way</span>
            </label>
            <label htmlFor="multicity">
              <input
                type="radio"
                name="tripType"
                value="multicity"
                checked={tripType === "multicity"}
                onChange={this.handleChange}
                id="multicity"/>
              <span className="multicity">Multy City</span>
            </label>
          </div>

          <Range
            changeHandle={this.handleChange}
            current={passengers.toString()}
            max="8"
            min="1"
            name="passengers"
            step="1"/>

          <Switch
            title="Payment"
            left="Dollars"
            right="Points"
            name="payment"
            checked={payment}
            changeCallback={this.handleChange}/>

          <input type="button" className="submit" value="Go" />
        </form>
      </section>
    );
  }
}

export default App;

