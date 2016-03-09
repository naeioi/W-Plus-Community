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

import { mockEventThumbnail, mockEventPic, mockEvent } from './mockData'

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
