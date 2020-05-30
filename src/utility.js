import React from 'react';
import Loader from 'react-loader-spinner';

// data used by exchange APIs
export const symbols = 'hulu,nflx,dis,qtwo,fb,tsla,nke,twtr,lyft,uber,,real,work,vff,cara,msft,aapl,googl,cgc,acb';
export const pairs = 'EUR,JPY,GBP,AUD,CAD,CHF,CNY,AED,NZD';

// convert unix timestamp into regular dates
export const getDateTime = (unix_timestamp) => {
	let date = new Date(unix_timestamp * 1000);
	let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
	let month = months[date.getMonth()];
	let day = date.getDate();
	let timestamp = `${month} ${day}`;
	return timestamp;
};

//  message for markets open/closed
export const getMarketMessage = (signal) => {
	const statusMsg = signal === 'close' ? `closed` : `open`;
	const status = `${statusMsg}`;
	return status;
};

// handle errors
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

// handle loading
export const Loading = () => (
	<div style={{ textAlign: 'center', margin: '10em 5em' }}>
		<Loader type="Rings" color="fuchsia" height={80} width={80} />
		<p>Loading</p>
	</div>
);

export let shuffle = (unsorted) => {
  var currentIndex = unsorted.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = unsorted[currentIndex];
    unsorted[currentIndex] = unsorted[randomIndex];
    unsorted[randomIndex] = temporaryValue;
  }

  return unsorted;
}
