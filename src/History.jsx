import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/component/Header.jsx'
import { fgColor2 } from '../src/style/baseCSS'
import ShareButton from '../src/component/ShareButton.jsx'
import NavBar from '../src/component/NavBar.jsx'
import Circle from '../src/component/Circle.jsx'
import EventEntry from '../src/component/EventEntry.jsx'
import '../src/utility/stickyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
try{
injectTapEventPlugin();
} catch(e) {}
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
const History = () => (
    <div>
      <Header
        style={{zIndex: 2}}
        backable={true}
        shareData={{name:'zhu'}}>
        中文233
      </Header>
      <NavBar style={{zIndex: 1}}/>
      <div
        onTouchMove={(e)=>console.log(e)}
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

export default History
