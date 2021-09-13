import React from 'react';
import App from './components/App.jsx';
import ReactDOM from 'react-dom';

const launchApp = function() {
  return <App />
};

ReactDOM.render(launchApp(), document.getElementById('app'));