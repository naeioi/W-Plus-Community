import React from 'react'
import { mergeCSS } from '../utility/style'
import { fgColor2 } from '../style/baseCSS'
import Button from './Button.jsx'

const ShareButton = ({style: _style}) => {
  let styleWrap = mergeCSS(_style, {
    //WebkitTapHighlightColor: 'rgba(200,0,0,0.4)',
    textAlign: 'center',
    color: fgColor2
  }), style = {
    padding: 13
  }
  return (
    <Button
      style={styleWrap}>
      <div
        style={style}
        className='icon-share'>
      </div>
    </Button>
  );
}

export default ShareButton
