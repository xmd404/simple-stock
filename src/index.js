import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './main.css';
import './components/draggable.js';

let App = <Router />;

ReactDOM.render(App, document.getElementById('root'));