import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/component/Header.jsx'
import { fgColor1, fgColor2 } from '../src/style/baseCSS'
import ShareButton from '../src/component/ShareButton.jsx'
import NavBar from '../src/component/NavBar.jsx'
import Circle from '../src/component/Circle.jsx'
import Showcase from '../src/component/Showcase.jsx'
import EventEntry from '../src/component/EventEntry.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
try{
injectTapEventPlugin();
} catch(e) {}
import '../src/utility/stickyfill'
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

const mockPosters = [
  {
    type: 'event',
    event: mockEvent
  },
  {
    type: 'event',
    event: mockEvent
  },
  {
    type: 'event',
    event: mockEvent
  }
];

const Discovery = () => {
  let s = {
    searchWrap: {
      position: 'fixed',
      top: 44,
      width: '100%',
      height: 25,
      zIndex: 1,
      //padding: '0 30',
      backgroundColor: fgColor1
    },
    posterContainer: {
      height: 150,
      border: '1px solid black'
    },
    featureContainer: {
      height: 60,
      border: '1px solid black'
    },
    filterWrap: {
      height: 30,
      border: '1px solid black',
      display: 'none'
    },
    searchBarWrap: {
      display: 'block',
      minHeight: 19,
      overflow: 'hidden',
      paddingTop: 1,
      margin: '0 10'
    },
    searchBar: {
      border: '0 none white',
      overflow: 'hidden',
      padding: 0,
      outline: 'none',
      backgroundColor: 'rgb(240,240,240)',
      resize: 'none',
      width: '100%',
      padding: '2 10 2 25',
      fontFamily: 'verdana',
      borderRadius: 10
    },
    searchIcon: {
      position: 'absolute'
    }
  };
  return (
    <div>
      <Header
        style={{zIndex: 2, borderBottom: '0px'}}
        backable={true}
        shareData={{name:'zhu'}}>
        中文233
      </Header>
      <div
        style={s.searchWrap}>
        <div style={s.searchBarWrap}>
          <div style={s.searchIcon} className='icon-discovery'></div>
          <input
            placeholder='搜索名称 / 地点 / 时间 / 人'
            rows='1'
            style={s.searchBar}
            type='text'></input>
        </div>
      </div>
      <NavBar style={{zIndex: 1}} />
      <div style={{
          paddingTop: 69,
          paddingBottom: 80
        }}>
        <Showcase
          posters={mockPosters}
          style={s.posterContainer}>
        </Showcase>
        <div style={s.featureContainer}>
        </div>
        <div style={s.filterWrap}>
        </div>
        <div
          onTouchMove={(e)=>console.log(e)}
          id='events'
          style={{
            overflowY: 'scroll,-moz-scrollbars-none',
            //paddingTop: 44,
            //paddingBottom: 80,
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
    </div>
  )

}

export default Discovery
