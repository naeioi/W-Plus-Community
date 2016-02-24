import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'
import { fgColor1, fgColor2, bgColor1, bgColor2 } from '../style/baseCSS'

const ShareButton = ({style: _style}) => {
  let style = mergeCSS(_style, {
    color: fgColor2
  })
  return (
    <div
      style={style}
      className='icon-share'>
    </div>
  )
}

export default ShareButton
