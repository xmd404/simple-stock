export const error = () => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

export const fetchStockData = async () => {
  const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
  const res = await fetch(
    `https://cloud.iexapis.com/beta/stock/aapl/quote?token=${API_KEY}`
    );
  const tickets = await res.data.children.map(obj => obj.data);
  this.setState({ tickets });
  console.log(tickets);
};

export const fetchForexData = async () => {
  const API_KEY = process.env.REACT_APP_FOREX_API_KEY;
  const res = await fetch(
    `http://data.fixer.io/api/latest?access_key=${API_KEY}`
  );
  const tickets = await res.data.children.map(obj => obj.data);
  this.setState({ tickets });
  console.log(tickets);
};

// export const fetchCryptoData = async () => {
//   const settings = {
//     method: 'GET',
//     headers: {
//       "Content-Type": "text/plain",
//       'X-CMC_PRO_API_KEY': process.env.REACT_APP_CRYPTO_API_KEY,
//     },
//   };
//   const res = await fetch(
//     'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', settings
//   );
//   const data = await res.json();
//   console.log(data);
// };