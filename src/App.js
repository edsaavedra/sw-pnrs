import React, { Component } from 'react';
import Dates from './components/dates';
import Radio from './components/radio';
import Range from './components/range';
import Results from './components/results';
import Select from './components/select';
import Switch from './components/switch';
import TextInput from './components/text-input';
import cities from './cities-data';

import './App.scss';
import getPnr from './generate-pnr';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        departureCity: "HOU",
        departureDate: this.getDate(1),
        passengers: 1,
        payment: false,
        promoCode: '',
        arriveCity: "DAL",
        returnDate: this.getDate(5),
        tripType: "roundtrip"
      },
      open: false
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const { form } = this.state;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    form[ input.name ] = value;
    this.setState({ form });
  }

  handleSubmit = () => {
    // this.setState({open: !this.state.open});
    getPnr(this.state.form);
  }

  getDate = (plusDays = 0) => {
    const today = new Date();
    let newDate = today;
    newDate.setDate(today.getDate() + plusDays);

    return newDate.toISOString().slice(0, 10);
  }

  render() {
    const {departureCity, departureDate, passengers, payment, promoCode, arriveCity, returnDate, tripType} = this.state.form;
    return (
      <section className="App">
        <h1 className="title">Lorem ipsum dolo</h1>

        <form className="form">
          <div className="field trip-type">
            <span className="field-title">Trip Type</span>
            <Radio
              name="tripType"
              value="roundtrip"
              checked={tripType === "roundtrip"}
              changeHandle={this.handleChange}
              label="Round Trip" />
            <Radio
              name="tripType"
              value="oneway"
              checked={tripType === "oneway"}
              changeHandle={this.handleChange}
              label="One Way" />
            <Radio
              changeHandle={this.handleChange}
              checked={tripType === "multicity"}
              label="Multi City"
              name="tripType"
              value="multicity" />
          </div>

          <div className="field dates">
            <Dates
              changeHandle={this.handleChange}
              label="Depart"
              min={this.getDate()}
              name="departureDate"
              value={departureDate} />
            <Dates
              changeHandle={this.handleChange}
              label="Return"
              min={departureDate}
              name="returnDate"
              value={returnDate} />
          </div>

          <div className="field cities">
            <Select
              changeHandle={this.handleChange}
              label="Departure"
              name="departureCity"
              options={cities}
              required={true}
              value={departureCity} />
            <Select
              changeHandle={this.handleChange}
              label="Arrive"
              name="arriveCity"
              options={cities}
              required={true}
              value={arriveCity} />
          </div>

          <div className="field">
            <Range
              changeHandle={this.handleChange}
              current={passengers.toString()}
              max="8"
              min="1"
              name="passengers"
              step="1" />

            <Switch
              title="Payment"
              left="Dollars"
              right="Points"
              name="payment"
              checked={payment}
              changeCallback={this.handleChange} />

            <TextInput
              changeCallback={this.handleChange}
              label="Promocode"
              name="promoCode"
              value={promoCode} />
          </div>


          <input type="button" className="submit" value="Go" onClick={this.handleSubmit} />
        </form>

        <Results open={this.state.open} close={this.handleSubmit} />
      </section>
    );
  }
}

export default App;
