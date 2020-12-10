import React from 'react';
import Loader from 'react-loader-spinner';
var mixpanel = require('mixpanel-browser');

// init mixpanel
mixpanel.init("b59ca805a95a568c14bebb64fc0049c5");

export const corsProxy = 'https://my-little-cors-proxy.herokuapp.com/'

// data used by exchange APIs
export const symbols = 'hulu,nflx,dis,tsla,nke,twtr,lyft,grub,amzn,real,lulu,work,vff,cara,msft,aapl,googl,cgc,acb,bidu,snap,';
export const forex = {
	'USD': 'United States Dollar',
	'JPY': 'Japanese Yin',
	'GBP': 'British Pound Sterling',
	'AUD': 'Australian Dollar',
	'CAD': 'Canadian Dollar',
	'CHF': 'Swiss Franc',
	'CNY': 'Chinese Yuan',
	'AED': 'United Arab Emirates Dirham',
	'NZD': 'New Zealand Dollar',
	'SGD': 'Singapore Dollar',
	'MXN': 'Mexican Peso',
	'KRW': 'South Korean Won',
	"BRL": "Brazilian Real",
	"CUP": "Cuban Peso",
	"COP": "Colombian Peso",
	"HKD": "Hong Kong Dollar",
	"INR": "Indian Rupee",
	"NGN": "Nigerian Naira",
	"RUB": "Russian Ruble",
	"ZAR": "South African Rand",
	"THB": "Thai Baht",
};
console.log({ forex });

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
};

export const getStockChart = (e) => {
	const chartID = e.currentTarget.getElementsByClassName('cardTicker')[0].innerText;
	window.location = `/#/chart/stock/${chartID}`;
	mixpanel.track(
		"Interacted w/ stock card",
		{
			"asset": "stock",
			"id": `${chartID}`
		}
	);
	return chartID;
};

export const getCryptoChart = (e) => {
	const newsID = e.currentTarget.getElementsByClassName('cardSymbol')[0].innerText;
	const chartID = e.currentTarget.getElementsByClassName('cardTicker')[0].innerText;
	window.location = `/#/chart/crypto/${chartID}/${newsID}`;
	mixpanel.track(
		"Interacted w/ crypto card",
		{
			"asset": "crypto",
			"id": `${chartID}`
		}
	);
	console.log({ chartID })
	return chartID;
};

export const getForexChart = (e) => {
	const chartID = e.currentTarget.getElementsByClassName('cardTicker')[0].innerText;
	window.location = `/#/chart/forex/${chartID}`;
	mixpanel.track(
		"Interacted w/ forex card",
		{
			"asset": "forex",
			"id": `${chartID}`
		}
	);
	return chartID;
};

export const getHomePage = () => {
	mixpanel.track(
		"Went to HomePage",
		{
			"id": `HomePage`
		}
	);
};

export const getDiscoverPage = () => {
	mixpanel.track(
		"Went to DiscoverPage",
		{
			"id": `DiscoverPage`
		}
	);
};

export const getProfilePage = () => {
	mixpanel.track(
		"Went to ProfilePage",
		{
			"id": `ProfilePage`
		}
	);
};

// snow / confetti / cash micro-interaction
var duration = 3 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  window.confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    gravity: 0.7,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    scalar: randomInRange(0.4, 1)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());