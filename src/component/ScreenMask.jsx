import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'

class ScreenMask extends React.Component{
  constructor({style: _style, onTouchTap}) {
    super();
    this._style = _style;
    this.onTouchTap = onTouchTap;
  }
  componentDidMount() {
    setTimeout(()=>this.refs['mask'].style.backgroundColor = 'rgba(0,0,0,0.3)', 10);
  }
  render() {
    let style = mergeCSS(this._style, {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'background-color 200ms ease-in-out',
        WebkitTransition: 'background-color 200ms ease-in-out',
        MozTransition: 'background-color 200ms ease-in-out',
        zIndex: (this._style && this._style.zIndex) ? this._style.zIndex : 2
    });
    return (
      <div>
        <div
          style={style}
          ref='mask'
          onTouchTap={this.onTouchTap}>
        </div>
      </div>
    );
  }
}

export default ScreenMask
