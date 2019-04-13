import React from 'react';

const DataSourcePageStyle = {
  margin: '0 0 20% 0',
  padding: '15px 30px',
};

const DataSourcePage = () =>
  <div style={DataSourcePageStyle}>
    <h1>Data sources:</h1>
    <br />
    <div>
      <h2>IEX Cloud</h2>
      <a 
      href='https://iexcloud.io/'
      target='_blank'
      rel='noopener noreferrer'
      >
        Website
      </a>
      &nbsp; | &nbsp;
      <a 
      href='https://iexcloud.io/docs/api/'
      target='_blank'
      rel='noopener noreferrer'
      >
        Docs
      </a>
    </div>
    <div>
      <h2>Fixer</h2>
      <a 
      href='https://fixer.io/'
      target='_blank'
      rel='noopener noreferrer'
      >
        Website
      </a>
      &nbsp; | &nbsp;
      <a 
      href='https://fixer.io/documentation'
      target='_blank'
      rel='noopener noreferrer'
      >
        Docs
      </a>
    </div>
    <div>
      <h2>CoinMarketCap</h2>
      <a 
      href='https://coinmarketcap.com/'
      target='_blank'
      rel='noopener noreferrer'
      >
        Website
      </a>
      &nbsp; | &nbsp;
      <a 
      href='https://coinmarketcap.com/api/documentation/v1/'
      target='_blank'
      rel='noopener noreferrer'
      >
        Docs
      </a>
    </div>
  </div>

export default DataSourcePage;