import React, { Component } from 'react';

const form = {
  margin: '0',
  padding: '2.75em 0',
  height: '100%',
  width: '100%',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const button = {
  padding: '8px 82px',
  borderRadius: '5px',
  color: '#000',
  backgroundColor: '#fff',
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for subscribing ' + this.state.value);
  }

  render() {
    return (
      <div style={form}>
        <h1>
          <span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            &nbsp;
            <input
              type='text'
              text='name'
              placeholder='Alex Smith'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br/><br/>
          <label>
            Email
            &nbsp;
            <input 
              type='text'
              text='emaul'
              placeholder='your@email.com'
            />
          </label>
          <br/><br/>
          <input 
            type='submit'
            value='Submit'
            style={button}
          />
          <br/><br/>
        </form>
      </div>
    )
  }
};

export default SignUpForm;