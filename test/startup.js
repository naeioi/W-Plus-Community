import '../src/style/base.css'
document.getElementById('startup-loading').innerHTML = require('../static/loading.html');

const mockEventThumbnail = require('../static/mockEventThumbnail.png');
const mockEventPic = require('../static/mockEventPic.jpeg')
const mockEvent = {
  title: '尤克里里分享会',
  '_id': 1423423,
  thumbnail: mockEventThumbnail,
  pic: mockEventPic,
  peopleCnt: {
    full: 10,
    now: 2
  },
  location: '西南一2069',
  due: {
    date: '2016-03-01',
    start: '15:30',
    end: '16:30'
  },
  description: 'Maecenas bibendum non dui vel luctus. Duis suscipit consequat quam, vel viverravelit congue a. Mauris at nibh egetsapien cursus tempus. Morbi dictum non',
};

require.ensure(['./App.jsx', 'react-dom', 'react', '../src/EventPage.jsx'], (require)=>{
  let EventPage = require('../src/EventPage.jsx').default;
  let History = require('../src/History.jsx').default;
  let Discovery = require('../src/Discovery.jsx').default;
  let ReactDOM = require('react-dom');
  let React = require('react');
  let DatePicker = require('../src/component/DatePicker.jsx').default;
  let mountPoint = document.getElementById('App');
  let TimePicker = require('../src/component/TimePicker.jsx').default;
  document.getElementById('startup-loading').innerHTML = '';
  //ReactDOM.render(<EventPage event={mockEvent}/>, document.getElementById('App'));
  //ReactDOM.render(<Discovery />, document.getElementById('App'));
  //ReactDOM.render(<DatePicker defaultDate={"2015/01/01"}/>, mountPoint);
  ReactDOM.render(<TimePicker hourState={(h)=>h.hour() == '0' ? 'occupied' : 'empty'}/>, mountPoint);
});
