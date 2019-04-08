import React, {Component} from 'react';

const ListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '45px 25px',
};

const TicketStyle = {
  display: 'inline-block',
  margin: '0',
  minWidth: '240px',
  maxWidth: '100%',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
};

class CryptoTicketList extends Component {
  constructor(props){
    super(props);
    // Don't call this.setState() in the Constructor!
    // Constructor is the only place where you should assign this.state directly.
    // In all other methods, you need to use this.setState() instead.
    const api = [
      {
        id: 1,
        name: 'Bitcoin',
        current: '$1.23',
        high: '$1.23',
        low: '$1.23',
      },
      {
        id: 2,
        name: 'Ethereum',
        current: '$1.23',
        high: '$1.23',
        low: '$1.23',
      },
      {
        id: 3,
        name: 'XRP',
        current: '$1.23',
        high: '$1.23',
        low: '$1.23',
      },
      {
        id: 4,
        name: 'Bitcoin Cash',
        current: '$1.23',
        high: '$1.23',
        low: '$1.23',
      },
      {
        id: 5,
        name: 'Litecoin',
        current: '$1.23',
        high: '$1.23',
        low: '$1.23',
      },
    ];

    this.state = {api};
  }

  componentDidMount() {
    // (async () => {
    //   const API_KEY = process.env.REACT_APP_FOREX_API_KEY;
    //   const res = await fetch(
    //     `http://data.fixer.io/api/latest?access_key=${API_KEY}`
    //   );
    //   const api = await res.data.data.children.map(obj => obj.data);
    //   this.setState({ api });
    //   console.log(api);
    // })();
  }

  render() {
    return (
      <div style={ListStyle}>
        {
          this.state.api.map((data, index) => (
            <div style={TicketStyle} key={index}>
              <hr/>
              <h2>{data.name}</h2>
              <p>Current: {data.current}</p>
              <p>High: {data.high}</p>
              <p>Low: {data.low}</p>
            </div>
          ))
        };
      </div>
    )
  }
}

export default CryptoTicketList;