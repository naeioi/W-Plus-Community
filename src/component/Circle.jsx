import React from 'react'
import { mergeCSS } from '../utility/style'
import { fgColor1 } from '../style/baseCSS'

const Circle = ({style: _style, children, color = fgColor1, shadow = true}) => {
  let circleWrapStyle = mergeCSS(_style, {
    textAlign: 'center',
    margin: '0 auto'
  }), circleStyle = {
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: color,
    boxShadow: shadow ? '0 0 1px rgba(255,255,255,0.3)' : ''
  }, childrenWrapStyle = {
    paddingTop: '50%',
    paddingBottom: '50%',
    marginTop: '-0.5em'
  };
  return (
    <div
      style={circleWrapStyle}>
      <div
        style={circleStyle}>
        <div
          style={childrenWrapStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Circle
