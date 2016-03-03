import React from 'react'
import Button from './Button.jsx'
import { mergeCSS } from '../utility/style'

/*
** Event Object: See Database.md
*/

const jumpToEvent = (event) => {
  //location.hash = `#/event/${event._id}`;
}

const EventEntry = ({ style: _style, event }) => {
  let style = {
    main: mergeCSS(_style, {
      boxSizing: 'border-box',
      position: 'relative',
      height: 80,
      width: '100%',
      WebkitUserSelect: 'none',
      backgroundColor: 'rgb(255,255,255)',
      padding: '0 0',
      color: 'rgba(0,0,0,0.8)',
      letterSpacing: '0.5px',
      margin: '0 0 3 0',
      borderBottom: '1px solid rgb(230,230,230)'
    }),
    pic: {
      overflow: 'hidden',
      width: 94,
      height: 80,
      float: 'left',
      margin: '0 10 0 2'
    },
    right: {
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      height: 75,
      //float: 'right',
      padding: '8 8'
    },
    title: {
      position: 'relative',
      top: 0,
      left: -7,
      fontSize: '0.8em',
      color: 'rgba(0,0,0,0.9)'
    },
    meter: {
      main: {
        position: 'absolute',
        bottom: 0,
        left: -5
      },
      section: {
        float: 'left',
        fontSize: '0.7em',
        margin: '2 5 0 0'
      }
    },
    arrow: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      padding: '35 0',
      top: 0,
      right: 0,
      width: 30,
      height: 81,
      color: 'rgba(0,0,0,0.8)',
      borderLeft: '1px dashed rgba(235,235,235,0.7)'
    },
    icon: {
      textAlign: 'center',
      width: 20,
      float: 'left',
      fontSize: '1.3em',
    }
  }
  return (
    <div
      onTouchTap={jumpToEvent(event)}
      style={style.main}>
      <img
        src={event.thumbnail}
        style={style.pic}
        ></img>
      <div style={style.right}>
        <div style={style.title}>
          {event.title}
        </div>
        <div className='meter' style={style.meter.main}>
          <div style={style.meter.section}>
            <div style={style.icon} className='icon-my'></div>{event.peopleCnt.now}/{event.peopleCnt.full}
          </div>
          <div style={style.meter.section}>
            <div style={style.icon} className='icon-clock'></div>{event.due.date}
          </div>
          <div style={style.meter.section}>
            <div style={style.icon} className='icon-location'></div>{event.location}
          </div>
        </div>
      </div>
      <Button style={style.arrow}>
        <div className='icon-left-open-big' style={{transform:'rotate(180deg)'}}></div>
      </Button>
    </div>
  );
}

export default EventEntry
