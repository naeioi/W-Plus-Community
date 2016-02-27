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
      hash: location.hash.split('/')[1],
      onPlus: false
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

  onPlusTap() {
    this.setState({
      onPlus: !this.state.onPlus
    });
  }

  render() {
    let style = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 49,
      backgroundColor: fgColor1
    }, _centerWidth = 25, centerWidth = _centerWidth + '%',
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
     }, centerButtonStyle = mergeCSS(buttonStyle, {
       width: centerWidth
     }), hashButtonStyle = mergeCSS(buttonStyle, {
       color: fgColor2
     }), circleStyle = {
       display: 'block',
       position: 'relative',
       top: -28,
       margin: '0 auto',
       textAlign: 'center',
       backgroundColor: fgColor1,
       width: 76,
       height: 76,
       borderRadius: '50%',
       fontSize: 50
       //color: fgColor1
     }, plusStyle = {
       position: 'relative',
       top: -12,
       fontFamily: 'Arial',
       fontWeight: 100,
       fontSize: 70,
       textAlign: 'center',
       color: 'white',
       transition: 'transform 300ms ease'
     }
    return (
      <div style={style}>
        {this.sections.map((section, ind) => {
          switch(section.path) {
            case this.state.hash :
              return (
                <Button
                  key={ind}
                  style={hashButtonStyle}>
                  <div
                    style={iconStyle}
                    className={section.iconClassName}></div>
                  {section.text}
                </Button>);
              case 'CENTER':
                return (
                  <div
                    key={ind}
                    style={centerButtonStyle}>
                    <div
                      style={circleStyle}>
                      <Button
                        style={{
                          width: 76,
                          height: 76,
                          borderRadius: '50%',
                        }}
                        onTouchTap={this.onPlusTap.bind(this)}>
                        <div
                          ref='iconPlus'
                          style={mergeCSS(plusStyle, {
                            transform: this.state.onPlus ? 'rotate(-45deg)' : ''
                          })}
                          >
                          +
                        </div>
                      </Button>
                    </div>
                  </div>
                );
              default:
                return (
                  <Button
                    key={ind}
                    style={buttonStyle}>
                    <div
                      style={iconStyle}
                      className={section.iconClassName}></div>
                    {section.text}
                  </Button>
                );
          }
        })}
      </div>
    )
  }
}

export default NavBar
