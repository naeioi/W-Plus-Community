import React from 'react'
import { mergeCSS } from '../utility/style'
import * from '../baseCSS'

/* Layout
** |--Back------Title------Supplyment--|
*/
const Header = ({ _style, supplyment, children, backable = false }) => {
  let style = mergeCSS(_style, {
    height: 88,
    width: '100%',
    backgroundColor: fgColor1
  }), childrenStyle = {
    textAlign: 'center',
    color: fgColor2,
    fontWeight: 'bold',
    margin: '0 auto'
  }, backStyle = {
    postion: 'absolution',
    left: 10,
    top: 10,
    display: backable ? 'block' : 'none'
  }, supplymentStyle = {
    position: 'absolution',
    right: 10,
    top: 10,
    display: supplyment ? 'block' : 'none'
  };
  return (
    <div style={style}>
      <Button
        style={backStyle}
        onClick={() => {window.history.back()}}>
        Back
      </Button>
      <span style={childrenStyle}>
        {children}
      </span>
      <div style={supplymentStyle}>
        {supplyment}
      </div>
    </div>
  )
}
