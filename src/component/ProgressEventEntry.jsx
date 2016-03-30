import React from 'react'
import Button from './Button.jsx'
import { mergeCSS } from '../utility/style'
import { fgColor1, fgColor2 } from '../style/baseCSS'

/*
** Event Object: See Database.md
*/

const jumpToEvent = (event) => {
  location.hash = `#/event/${event._id}`;
}

const ProgressBar = ({percent})=> (
	<div>
		<div style={{
			width: percent,
			backgroundColor: fgColor2,
			height: 7,
			float: 'left',
		}}>
		</div>
		<div style={{
			width: 100-parseInt(percent)+'%',
			backgroundColor: fgColor1,
			height: 7,
			float: 'left'
		}}>
		</div>
	</div>
);

const ProgressEventEntry = ({ style: _style, event }) => {
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
      padding: '8 8 8 4'
    },
    title: {
      fontSize: '0.8em',
      color: 'rgba(0,0,0,0.9)',
      fontWeight: 'bold'
    },
    status: {
      main: {
        position: 'absolute',
        bottom: 8,
        width: '70%'
      },
      text: {
      	fontSize: '0.5em'
      },
      bar: {
      	width: '100%',
      	backgroundColor: fgColor1,
      	height: 7
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
        <div style={style.status.main}>
          <div style={style.status.text}>{event.status || ''}</div>
          <ProgressBar percent={event.progressPercent || '0%' } />
        </div>
      </div>
      <Button style={style.arrow}>
        <div className='icon-left-open-big' style={{transform:'rotate(180deg)'}}></div>
      </Button>
    </div>
  );
}

export default ProgressEventEntry
