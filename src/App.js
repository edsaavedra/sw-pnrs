import React, { Component } from 'react';
import Date from './components/date';
import Radio from './components/radio';
import Range from './components/range';
import Results from './components/results';
import Select from './components/select';
import Switch from './components/switch';
import TextInput from './components/text-input';
import './App.scss';
import getPnr from './generate-pnr';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        passengers: 1,
        payment: false,
        tripType: "roundtrip"
      },
      open: false
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const { form } = this.state;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    form[input.name] = value;
    this.setState({ form });
  }

  handleSubmit = () => {
    // this.setState({open: !this.state.open});
    getPnr(this.state.form);
  }

  render() {
    const { tripType, passengers, payment } = this.state.form;
    return (
      <section className="App">
        <h1 className="title">Lorem ipsum dolo</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae.</p>
        <form className="form">

          <div className="field trip-type">
            <span className="field-title">Trip Type</span>
            <Radio
                name="tripType"
                value="roundtrip"
                checked={tripType === "roundtrip"}
                changeHandle={this.handleChange}
                label="Round Trip"/>
            <Radio
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                changeHandle={this.handleChange}
                label="One Way"/>
            <Radio
              changeHandle={this.handleChange}
              checked={tripType === "multicity"}
              label="Multi City"
              name="tripType"
              value="multicity"/>
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

            <TextInput />
            <Select />
            <Date></Date>

          <input type="button" className="submit" value="Go" onClick={this.handleSubmit} />
        </form>

        <Results open={this.state.open} close={this.handleSubmit}/>
      </section>
    );
  }
}

export default App;
