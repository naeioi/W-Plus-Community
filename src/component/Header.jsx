import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'
import { fgColor1, fgColor2, bgColor1, bgColor2, darkenBG, clearBG } from '../style/baseCSS'
import ShareButton from './ShareButton.jsx'
import Button from './Button.jsx'

/* Layout
** |--Back------Title------Share--|
*/
const Header = ({ style: _style, shareData, children, backable = false }) => {
  let style = mergeCSS(_style, {
    height: 44,
    width: '100%',
    backgroundColor: fgColor1,
    borderBottom: '1px solid #d8d8d8',
    WebkitUserSelect: 'none'
  }), childrenStyle = {
    textAlign: 'center',
    color: fgColor2,
    fontWeight: 'bold',
    display: 'block',
    paddingTop: 10,
    margin: '0 auto'
  }, backStyle = {
    position: 'absolute',
    fontSize: 20,
    width: 44,
    height: 44,
    //fontWeight: 200,
    display: backable ? 'block' : 'none'
  }, shareStyle = {
     position: 'absolute',
     right: 0,
     top: 0,
     width: 44,
     height: 44,
     display: shareData ? 'block' : 'none',
    verticalAlign: 'middle'
  }, arrowStyle = {
    color:fgColor2,
    padding: '12 18 12 6'
    //fontWeight: 100
  }
  return (
    <div style={style}>
      <Button
        style={backStyle}
        onTouchTap={() => {window.history.back();}}>
        <div className='icon-left-open-big'
          style={arrowStyle}>
        </div>
      </Button>
      <div style={childrenStyle}>
        {children}
      </div>
      <ShareButton
        style={shareStyle}
        {...shareData} />
    </div>)
}
/*
  */

export default Header
