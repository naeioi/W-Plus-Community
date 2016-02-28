import React from 'react'
import ReactDOM from 'react-dom'
import { fgColor1, fgColor2 } from '../style/baseCSS'
import { mergeCSS, copyStyle } from '../utility/style'
import Button from './Button.jsx'
import ScreenMask from './ScreenMask.jsx'
import Circle from './Circle.jsx'
//import extractHash from '../utility/extractHash'

const NavButton = ({ style: _style, path, iconClassName, text, hash }) => {
  let style = mergeCSS(_style, {
    fontSize: '0.7em',
    fontWeight: '700',
    color: 'rgba(255,255,255, 1)',
    display: 'block'
  }), iconStyle = {
    fontSize: '2.2em',
    textAlign: 'center'
  };
  return (
    <Button
      style={mergeCSS(style, {
        color: hash === path ? fgColor2: style.color
      })}>
      <div
        style={iconStyle}
        className={iconClassName}>
      </div>
      {text}
    </Button>
  );
};

class PlusButton extends React.Component {
  constructor({style: _style, toggleScreenMask}) {
    super();
    this.style = mergeCSS(_style, {
    });
    this.state = {
      onPlus: false
    }
    this.toggleScreenMask = toggleScreenMask;
  }

  onTouchTap() {
    this.setState({
      onPlus: !this.state.onPlus
    });
  }

  componentWillUpdate( nextProps, nextState ) {
    this.toggleScreenMask(this.onTouchTap.bind(this));
  }

  render() {
    let circleStyle = {
      display: 'block',
      position: 'relative',
      top: -35,
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: fgColor1,
      width: 80,
      height: 80,
      borderRadius: '50%',
      fontSize: 50,
      WebkitUserSelect: 'none'
      //color: fgColor1
    }, plusStyle = {
      position: 'relative',
      top: 20,
      fontFamily: 'Arial',
      fontWeight: 100,
      fontSize: 36,
      textAlign: 'center',
      color: 'white',
      transition: 'transform 300ms ease',
      WebkitUserSelect: 'none'
    }, optionsStyle = {
      color: 'rgba(255,255,255,1)',
      fontSize: 30
    }, leftStyle = {
      position: 'absolute',
      top: -42,
      left: -9,
      width: 44,
    }, rightStyle = {
      position: 'absolute',
      top: -42,
      right: -9,
      width: 44
    };
    return (
      <div>
        <div
          style={this.style}>
            <div
              style={circleStyle}>
              <div
                onTouchTap={this.onTouchTap.bind(this)}
                style={mergeCSS(plusStyle, {
                  transform: this.state.onPlus ? '':'rotate(45deg)'
                })}
                >
                <div className='icon-cross'></div>
              </div>
              <div
                style={mergeCSS(optionsStyle, {display: this.state.onPlus ? 'block' : 'none'})}>
                <Circle
                  style={leftStyle}>
                  <div className='icon-person'></div>
                </Circle>
                <Circle
                  style={rightStyle}>
                  <div className='icon-group'></div>
                </Circle>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor() {
    super();
    /* location.hash = '#/first/second -> first */
    this.state = {
      hash: location.hash.split('/')[1]
    };
    const hashChangeListener = (e) => {
      this.setState({hash: location.hash.split('/')[1]});
    };
    let oldFunc = typeof window.onhashchange === 'function' ? window.onhashchange : ()=>{};
    window.onhashchange = (e) => {
      oldFunc(e);
      hashChangeListener(e);
    }
    this.sections = [{
      path: 'discovery',
      iconClassName: 'icon-discovery',
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
      iconClassName: 'icon-my',
      text: '我的'
    }];
  }

  toggleScreenMask(onTouchTap) {
    if(this.masked){
      ReactDOM.unmountComponentAtNode(this.refs['maskDiv']);
      this.masked = false;
    }
    else {
      ReactDOM.render((
        <ScreenMask
          onTouchTap={onTouchTap}
          style={{zIndex: 2}} />), this.refs['maskDiv']
      );
      this.masked = true;
    }
  }

  render() {
    let style = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: 49,
      backgroundColor: fgColor1,
      zIndex: 3
    }, _centerWidth = 25, centerWidth = _centerWidth + '%',
    buttonWidth = (100-_centerWidth) / 4 + '%',
    buttonStyle = {
      display: 'border-box',
      paddingTop: 2,
      float: 'left',
      width: buttonWidth,
      height: style.height,
      textAlign: 'center'
   }, centerButtonStyle = mergeCSS(buttonStyle, {
     width: centerWidth
   }), hashButtonStyle = mergeCSS(buttonStyle, {
     color: fgColor2
   });
    return (
      <div>
        <div style={style}>
          {this.sections.map((section, ind) => {
            switch(section.path) {
                case 'CENTER':
                  return (
                    <PlusButton
                      toggleScreenMask={this.toggleScreenMask.bind(this)}
                      key={ind}
                      style={centerButtonStyle}
                      {...this.state}>
                    </PlusButton>
                  );
                default:
                  return (
                    <NavButton
                      style={buttonStyle}
                      key={ind}
                      {...section}
                      {...this.state}>
                    </NavButton>
                  );
            }
          })}
        </div>
        <div ref='maskDiv' />
      </div>
    )
  }
}

export default NavBar
