import React from 'react'
import ReactDOM from 'react-dom'
import { fgColor1, fgColor2 } from '../style/baseCSS'
import { mergeCSS } from '../utility/style'
import Button from './Button.jsx'
//import extractHash from '../utility/extractHash'

class NavBar extends React.Component {
  constructor() {
    super();
    /* location.hash = '#/first/second -> first */
    this.state = {
      hash: location.hash.split('/')
    }
    this.sections = [{
      path: 'discover',
      iconClassName: '',
      text: '发现'
    }, {
      path: 'history',
      iconClassName: '',
      text: '历史'
    }, {
      path: 'CENTER',
      iconClassName: '',
      text: '',
    }, {
      path: 'space',
      iconClassName: '',
      text: '场地'
    }, {
      path: 'my',
      iconClassName: '',
      text: '我的'
    }];
  }
  render() {
    let style = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 49,
      backgroundColor: fgColor1,
      color: fgColor2
    }, _centerWidth = 20, centerWidth = _centerWidth + '%',
       buttonWidth = (100-_centerWidth) / 4 + '%',
       buttonStyle = {
         fontSize: '0.7em',
         fontWeight: 'bold',
         color: fgColor2,
         display: 'block',
         float: 'left',
         width: buttonWidth,
         height: style.height
       };
    return (
      <div style={style}>
        {this.sections.map((section, ind) => (
          <Button
            key={ind}
            style={section.path === 'CENTER' ?
              mergeCSS(buttonStyle, { width: centerWidth }) : buttonStyle}>
            {section.text}
          </Button>
        ))}
      </div>
    )
  }
}

export default NavBar
