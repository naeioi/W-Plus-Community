import React from 'react'
import Button from './Button.jsx'
import { mergeCSS, setAlpha } from '../utility/style.js'
import { fgColor1, fgColor2 } from '../style/baseCSS.js'
import Circle from './Circle.jsx'

const PopUpShare = ({ style: _style }) => {
  let style = mergeCSS(_style, {
    boxSizing: 'border-box',
    minHeight: 150,
    width: '100%',
    backgroundColor: 'white',
    padding: '10 20 10 20',
    borderTop: '1px solid rgba(0,0,0,0.3)'
  }), buttonStyle = {
    color: fgColor2,
    boxSizeing: 'border-box',
    height: 65,
    paddingTop: 10,
    width: '25%',
    float: 'left'
  }, legendStyle = {
    color: 'rgba(0,0,0,0.9)',
    boxSizing: 'border-box',
    marginTop: 5,
    fontSize: '14px'
  }, circleStyle = {
    width: 35
  };
  const row1 = [{
    className: 'icon-wechat_moments',
    text: '朋友圈'}, {
    className: 'icon-wechat',
    text: '微信朋友'}, {
    className: 'icon-qq',
    text: 'QQ好友'}, {
    className: 'icon-qzone-logo',
    text: 'QQ空间'
  }], row2 = [{
    className: 'icon-sina-weibo',
    text: '新浪微博'}, {
    className: 'icon-link',
    text: '复制链接'}, {
    className: 'icon-ellipsis',
    text: '更多'
  }];

  return (
    <div
      style={style}>
      {/* Row 1*/}
      {row1.map((medium, ind) => (
        <Button style={buttonStyle} key={ind}>
          <Circle style={circleStyle}>
            <div className={medium.className}></div>
          </Circle>
          <div style={legendStyle}>{medium.text}</div>
        </Button>
      ))}
      {/* Clear float */}
      <div className='clearFloat'></div>
      {/* Row 2 */}
      {row2.map((medium, ind) => (
        <Button style={buttonStyle} key={ind}>
          <Circle style={circleStyle}>
            <div className={medium.className}></div>
          </Circle>
          <div style={legendStyle}>{medium.text}</div>
        </Button>
      ))}
    </div>
  );
}

export default PopUpShare
