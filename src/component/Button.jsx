import React from 'react'
import { darkenBG, clearBG } from '../style/baseCSS'

const Button = ({ onTouchTap, style: _style, children }) => {
  let style = _style;
  //onTouchTap={onTouchTap}
  return (
    <a
      href='javascript:void(0)'
      onTouchStart={darkenBG}
      onTouchEnd={clearBG}
      onTouchCancel={clearBG}
      onTouchTap={onTouchTap}
      style={style}>
      {children}
    </a>
  )
}

export default Button
