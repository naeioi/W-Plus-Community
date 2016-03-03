import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/component/Header.jsx'
import { fgColor2 } from '../src/style/baseCSS'
import ShareButton from '../src/component/ShareButton.jsx'
import NavBar from '../src/component/NavBar.jsx'
import Circle from '../src/component/Circle.jsx'
import EventEntry from '../src/component/EventEntry.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const mockEventImg = require('../static/mockEventImg.png');
const mockEvent = {
  title: '尤克里里分享会',
  '_id': 1423423,
  thumbnail: mockEventImg,
  peopleCnt: {
    full: 10,
    now: 2
  },
  location: '西南一2069',
  due: {
    date: '2016-03-01'
  }
};

const App = () => (
  <div>
    <Header
      style={{zIndex: 2}}
      backable={true}
      shareData={{name:'zhu'}}>
      中文233
    </Header>
    <NavBar style={{zIndex: 1}}/>
    <div
      id='events'
      style={{
        overflowY: 'scroll,-moz-scrollbars-none',
        paddingTop: 44,
        paddingBottom: 80,
        zIndex: 0
      }}>
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />
      <EventEntry event={mockEvent} />

    </div>
  </div>

)

document.getElementById('startup-loading').innerHTML = '';
ReactDOM.render(<App />, document.getElementById('App'));
