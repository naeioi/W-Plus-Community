import React from 'react'
import { mergeCSS, setAlpha } from '../utility/style.js'
import { fgColor1, fgColor2 } from '../style/baseCSS.js'

const PopUpShare = ({ style: _style }) => {
  let style = mergeCSS(_style, {
    boxSizing: 'border-box',
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    borderTop: '1px solid rgba(0,0,0,0.3)'
  }), TJCloudWrapStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    left: 0,
    height: 150,
    width: '30%',
    backgroundColor: fgColor2
  }, OtherMediaWrapStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    height: 150,
    width: '70%',
    right: 0,
    backgroundColor: fgColor2
  }
  return (
    <div
      style={style}>
      <div
        style={TJCloudWrapStyle}
        id='TJCloudWrap'></div>
      <div
        style={OtherMediaWrapStyle}
        id='OtherMediaWrap'></div>
    </div>
  );
}

export default PopUpShare
