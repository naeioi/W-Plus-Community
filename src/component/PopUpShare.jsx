import React from 'react'
import Button from './Button.jsx'
import { mergeCSS, setAlpha } from '../utility/style.js'
import { fgColor1, fgColor2 } from '../style/baseCSS.js'

const PopUpShare = ({ style: _style }) => {
  let style = mergeCSS(_style, {
    boxSizing: 'border-box',
    minHeight: 150,
    width: '100%',
    backgroundColor: 'white',
    padding: '10 20',
    borderTop: '1px solid rgba(0,0,0,0.3)'
  }), buttonStyle = {
    display: 'block',
    color: fgColor2,
    boxSizeing: 'border-box',
    height: 65,
    width: '25%',
    float: 'left'
  };
  const row1 = ['icon-wechat_moments', 'icon-wechat', 'icon-qq', 'icon-qzone-logo'],
        row2 = ['icon-sina-weibo', 'icon-link', 'icon-ellipsis'];
  return (
    <div
      style={style}>
      {/* Row 1*/}
      {row1.map((className, ind) => (
        <Button style={buttonStyle} key={ind}>
          <div className={className}></div>
        </Button>
      ))}
      {/* Clear float */}
      <div className='clearFloat'></div>
      {/* Row 2 */}
      {row2.map((className, ind) => (
        <Button style={buttonStyle} key={ind}>
          <div className={className}></div>
        </Button>
      ))}
    </div>
  );
}

export default PopUpShare
