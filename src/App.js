import React, { Component } from 'react';
import './App.scss';

import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import NavigationIcon from '@material-ui/icons/Navigation';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  styledRadio(props) {
    return (
      <Radio
        className={'class'}
        disableRipple
        color="default"
        checkedIcon={<span className={'class'} />}
        icon={<span className={'class'} />}
        {...props}
      />
    );
  }

  handleChange() {}
  selectedValue() {}

  valuetext(value) {
    return `${value}°C`;
  }

  render() {
    return (
      <Container className="App">
        <section component={Paper} elevation={6} className="form">
          <div className="title">
          </div>
          <FormGroup>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Trip Type</FormLabel>
                <RadioGroup defaultValue="RoundTrip" aria-label="Trip Type" name="Trip Type">
                  <FormControlLabel value="RoundTrip" control={<this.styledRadio />} label="RoundTrip" />
                  <FormControlLabel value="One-way" control={<this.styledRadio />} label="One-way" />
                  <FormControlLabel value="Multy-city" control={<this.styledRadio />} label="Multy-city" />
                </RadioGroup>
              </FormControl>
            </div>

            <div>
            <Typography id="discrete-slider" gutterBottom>
              Passengers
            </Typography>
            <Slider
              defaultValue={1}
              getAriaValueText={this.valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={8}
            />
            </div>
            <div>
              <FormControlLabel control={<Switch value="checkedC" />} label="Dollars \/ Points" />
            </div>
          <Fab variant="extended">
            <NavigationIcon />
            Get PNR
          </Fab>
          </FormGroup>
        </section>
      </Container>
    );
  }
}

export default App;

