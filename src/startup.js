import './style/base.css'
require.ensure(['../static/loading.html', './App.jsx'], (require)=>{
  let html = require('../static/loading.html');
  document.getElementById('startup-loading').innerHTML = html;
  //require('./App.jsx');
});
