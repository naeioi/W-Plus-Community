import '../src/style/base.css'
document.getElementById('startup-loading').innerHTML = require('../static/loading.html');
require.ensure(['../src/App.jsx', 'react-dom', 'react'], (require)=>{
  let App = require('./App.jsx').default;
  let ReactDOM = require('react-dom');
  let React = require('react');
  document.getElementById('startup-loading').innerHTML = '';
  ReactDOM.render(<App />, document.getElementById('App'));
});
