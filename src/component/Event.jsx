import React from 'react'
import { fgColor3, bgColor2 } from '../style/baseCSS'
import { CommentSection } from './Comment.jsx'
import Button from './Button.jsx'

/* TODO:
** change the style of scroll bar from style sheet from G+
*/

const Event = ({ event: e }) => {
  let s = {
    main: {
      overflowY: 'scroll',
      width: '100%',
      paddingTop: 44,
      paddingBottom: 80
    },
    posterWrap: {
      height: 150,
      width: '100%',
      overflow: 'hidden'
    },
    poster: {
      display: 'block',
      maxWidth: '100%',
      margin: '0 auto'
      //maxHeight: '100%'
    },
    applyButton: {
      backgroundColor: fgColor3,
      textAlign: 'center',
      padding: '4 0',
      color: 'rgb(255,255,255)',
      fontWeight: 'bold',
      fontSize: '0.9em',
      margin: '2 0 2 0',
      borderBottom: '1px solid rgb(200,200,200)'
    },
    meter: {
      marginBottom: 9,
    },
    icon: {
      lineHeight: '1.4em'
    },
    description: {

    },
    detail: {
      padding: '15 20',
      color: bgColor2,
      backgroundColor: 'rgb(255,255,255)',
      margin: '-1 4 0 4',
      border: '1px solid rgb(200,200,200)',
      lineHeight: '1.2em',
      wordWrap: 'break-word'
    },
    comment: {
      color: bgColor2,
      margin: '1 4 0 4',
      boxSizing: 'border-box',
      padding: '5 13 15 13'
    }
  };
  return (
    <div style={s.main}>
      {/* Poster */}
      <div style={s.posterWrap}>
        <img
          src={e.pic}
          style={s.poster}>
        </img>
        <div style={s.title}>{e.title}</div>
      </div>
      {/* apply button */}
      <Button
        style={s.applyButton}>
        <div className='icon-plus'>加入</div>
      </Button>
      {/* detailed info */}
      <div style={s.detail}>
        <div style={s.meter}>
          <div style={s.icon} className='icon-location'>{e.location}</div>
          <div style={s.icon} className='icon-time'>{e.due.date} {e.due.start}-{e.due.end}</div>
          <div style={s.icon} className='icon-person'>{e.peopleCnt.now}/{e.peopleCnt.full}</div>
        </div>
        <div style={s.description}>{e.description}</div>
      </div>
      {/* comment */}
      <CommentSection style={s.comment}/>
    </div>
  );
}

export default Event
