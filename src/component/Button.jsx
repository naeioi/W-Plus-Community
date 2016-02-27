import React from 'react'
import { darkenBG, clearBG } from '../style/baseCSS'
import { mergeCSS } from '../utility/style.js'

const Button = ({ onTouchTap, style: _style, children, darkenBG: doDarkenBG = true }) => {
  let style = mergeCSS(_style, {
    display: 'block',
    textAlign: 'center',
    WebkitUserSelect: 'none'
  });
  //onTouchTap={onTouchTap}
  if (doDarkenBG)
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
    );
  else
    return (
      <a
        href='javascript:void(0)'
        onTouchTap={onTouchTap}
        style={style}>
        {children}
      </a>
    );
}

export default Button
