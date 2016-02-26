import React from 'react'
import ReactDOM from 'react-dom'
import { fgColor1, fgColor2 } from '../style/baseCSS'
import { mergeCSS, copyStyle } from '../utility/style'
import Button from './Button.jsx'
//import extractHash from '../utility/extractHash'

class NavBar extends React.Component {
  constructor() {
    super();
    /* location.hash = '#/first/second -> first */
    this.state = {
      hash: location.hash.split('/')[1]
    }
    this.sections = [{
      path: 'discovery',
      iconClassName: 'icon-search',
      text: '发现'
    }, {
      path: 'history',
      iconClassName: 'icon-history',
      text: '历史'
    }, {
      path: 'CENTER',
      iconClassName: '',
      text: '',
    }, {
      path: 'space',
      iconClassName: 'icon-location',
      text: '场地'
    }, {
      path: 'my',
      iconClassName: 'icon-user',
      text: '我的'
    }];
  }
  render() {
    let style = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 49,
      backgroundColor: fgColor1
    }, _centerWidth = 20, centerWidth = _centerWidth + '%',
    buttonWidth = (100-_centerWidth) / 4 + '%',
    buttonStyle = {
       fontSize: '0.7em',
       fontWeight: 'bold',
       color: 'rgba(255,255,255,0.8)',
       display: 'block',
       float: 'left',
       width: buttonWidth,
       height: style.height
     }, iconStyle = {
       fontSize: '2em'
     };
    return (
      <div style={style}>
        {this.sections.map((section, ind) => (
          <Button
            key={ind}
            style={((style)=>{
              if(section.path === 'CENTER') style.width = centerWidth;
              console.log(section.path, this.state.hash, style);
              if(section.path === this.state.hash) style.color = fgColor2;
              return style;
            })(copyStyle(buttonStyle))}>
            <div
              style={iconStyle}
              className={section.iconClassName}></div>
            {section.text}
          </Button>
        ))}
      </div>
    )
  }
}

export default NavBar
