export const error = () => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser 
    // and an instance of http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
  // console.log(error.config);
};

export const getDateTime = (unix_timestamp) => {
  let date = new Date(unix_timestamp * 1000);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let timestamp = `${month} ${day}`;
  return timestamp;
};

export const getMarketStatus = (signal) => {
  const status = signal === 'close' ? 'closed' : 'open';
  return `The markets are ${status}.`;
};