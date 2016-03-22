import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../component/Header.jsx'
import { fgColor2 } from '../style/baseCSS'
import ShareButton from '../component/ShareButton.jsx'
import NavBar from '../component/NavBar.jsx'
import Circle from '../component/Circle.jsx'
import EventEntry from '../component/EventEntry.jsx'
import '../utility/stickyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
try{
injectTapEventPlugin();
} catch(e) {}

import { mockEventThumbnail, mockEventPic, mockEvent } from '../mockData'

const History = () => (
    <div>
      <Header
        Extra={<ShareButton />}
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
