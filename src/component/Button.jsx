import React from 'react'
import { darkenBG, clearBG } from '../style/baseCSS'
import { mergeCSS } from '../utility/style.js'

const Button = ({ onTouchTap, style: _style, children }) => {
  let style = mergeCSS(_style, {
    textAlign: 'center'
  });
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
