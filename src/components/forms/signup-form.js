import React from 'react';

const formStyle = {
  margin: '0',
  padding: '50px',
  height: '265px',
  width: 'auto',
  color: '#fff',
  backgroundColor: '#000',
  textAlign: 'center',
};

const buttonStyle = {
  margin: '0',
  padding: '8px 82px',
  borderRadius: '5px',
  color: '#fff',
  backgroundColor: '#000',
};

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Thanks for subscribing ' + this.state.value);
  }

  render() {
    return (
      <div style={formStyle}>
        <h2><span role='img' aria-label='money with wings emoji'>💸 &nbsp;</span>SimpleStock</h2>
        <p>Build wealth for your future self <span role='img' aria-label='fire emoji'>🔥</span>. &nbsp;Sign-up below for access.</p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            &nbsp;
            <input
              type='text'
              text='name'
              placeholder='Alex Smith'
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Email:
            &nbsp;
            <input type='text'text='emaul' placeholder='your@email.com' />
          </label>
          <br/><br/>
          <input type='submit' value='Submit' style={buttonStyle} />
          <br/><br/>
        </form>
      </div>
    )
  }
};