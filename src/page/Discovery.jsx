import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../component/Header.jsx'
import { fgColor1, fgColor2, bgColor2, bgColor1 } from '../style/baseCSS'
import ShareButton from '../component/ShareButton.jsx'
import NavBar from '../component/NavBar.jsx'
import Circle from '../component/Circle.jsx'
import Button from '../component/Button.jsx'
import Showcase from '../component/Showcase.jsx'
import EventEntry from '../component/EventEntry.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
try{
injectTapEventPlugin();
} catch(e) {}
import '../utility/stickyfill'

import { mockEvent, mockPosters } from '../mockData'

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
      height: 65,
      position: 'relative',
      paddingLeft: '7%',
      paddingRight: '7%',
      backgroundColor: 'white',
      marginBottom: 4,
      borderBottom: '1px solid rgb(230,230,230)'
    },
    button: {
      boxSizing: 'border-box',
      padding: '5 0',
      color: bgColor2,
      fontSize: '0.4em',
      width: '25%',
      height: '100%',
      float: 'left'
    },
    filterWrap: {
      height: 30,
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
      padding: '2 10 2 28',
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
        Extra={
          <ShareButton />
        }
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
          <Button style={s.button}>
            <Circle
              style={{width: '60%'}}
              ></Circle>
            W-cafe
          </Button>
          <Button style={s.button}>
            <Circle
              style={{width: '60%'}}
              ></Circle>
            数学建模
          </Button>
          <Button style={s.button}>
            <Circle
              style={{width: '60%'}}
              ></Circle>
            高数赶集
          </Button>
          <Button style={s.button}>
            <Circle
              style={{width: '60%'}}
              ></Circle>
            时尚党建
          </Button>
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
