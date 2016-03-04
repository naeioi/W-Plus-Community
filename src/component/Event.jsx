import React from 'react'
import { fgColor3 } from '../style/baseCSS'

const Event = ({ e }) => {
  let s = {
    main: {
      overflow: 'scroll',
      width: '100%',
      paddingTop: 44,
      paddingBottom: 80
    },
    poster: {
      height: 150,
    },
    applyButton: {
      backgroundColor: fgColor3
      textAlign: 'center'
    },
    meter: {

    },
    icon: {
      float: 'left'
    },
    description: {

    }
  };
  return (
    <div style={s.main}>
      {/* Poster */}
      <div>
        <img
          src={e.pic}
          style={s.poster}>
        </img>
        <div style={s.title}>{e.title}</div>
      </div>
      {/* apply button */}
      <Button
        style={s.applyButton}>
        <div className='icon-plus'></div>加入
      </Button>
      {/* detailed info */}
      <div>
        <div style={s.meter}>
          <div style={s.icon} className='icon-location'>{e.location}</div>
        </div>
        <div style={s.meter}>
          <div style={s.icon} className='icon-time'>{e.due.date} {e.due.start}-{e.due.end}</div>
        </div>
        <div style={s.meter}>
          <div style={s.icon} className='icon-person'>{e.peopleCnt.now}/{e.peopleCnt.full}</div>
        </div>
        <div style={e.description}>{e.description}</div>
      </div>
      {/* comment */}
      <div></div>
    </div>
  );
}

export default Event
