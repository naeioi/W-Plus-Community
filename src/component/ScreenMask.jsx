import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'

const ScreenMask = ({style: _style, onTouchTap}) => {
  let style = mergeCSS(_style, {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      transition: 'background-color 200ms ease-in-out',
      WebkitTransition: 'background-color 200ms ease-in-out',
      zIndex: (_style && _style.zIndex) ? _style.zIndex : 2
  });
  return (
    <div>
      <div
        style={style}
        ref={(e) => e ? setTimeout(()=>e.style.backgroundColor='rgba(0,0,0,0.3)',0) : void(0) }
        onTouchTap={onTouchTap}>
      </div>
    </div>
  );
}

export default ScreenMask
