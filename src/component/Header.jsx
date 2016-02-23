import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'
import { fgColor1, fgColor2, bgColor1, bgColor2 } from '../baseCSS'

const Button = ({ onClick, style: _style, children }) => {
  let style = _style;
  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  )
}

/* Layout
** |--Back------Title------Supplyment--|
*/
const Header = ({ style: _style, supplyment, children, backable = false }) => {
  let style = mergeCSS(_style, {
    height: 44,
    width: '100%',
    backgroundColor: fgColor1
  }), childrenStyle = {
    textAlign: 'center',
    color: fgColor2,
    fontWeight: 'bold',
    display: 'block',
    paddingTop: 10,
    margin: '0 auto'
  }, backStyle = {
    position: 'absolute',
    fontSize: 18,
    width: 44,
    height: 44,
    borderColor: 'white',
    fontWeight: 200,
    display: backable ? 'block' : 'none'
  }, supplymentStyle = {
     position: 'absolute',
     right: 18,
     top: 11,
    display: supplyment ? 'table-cell' : 'none',
    verticalAlign: 'middle'
  }, arrowStyle = {
    borderColor:fgColor2,
    top: 18,
    left: 18
  }
  return (
    <div style={style}>
      <Button
        style={backStyle}
        onClick={() => {window.history.back();}}>
        <div className='backArrow'
          style={arrowStyle}>
        </div>
      </Button>
      <div style={childrenStyle}>
        {children}
      </div>
      <div style={supplymentStyle}>
        {supplyment}
      </div>
    </div>)
}
/*
  */

export default Header
