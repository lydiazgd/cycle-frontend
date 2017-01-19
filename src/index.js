import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
