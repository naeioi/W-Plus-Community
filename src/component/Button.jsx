import React from 'react'
import { darkenBG, clearBG } from '../style/baseCSS'
import { mergeCSS } from '../utility/style.js'

class Button extends React.Component {
  constructor({ onTouchTap, style: _style, children, darkenBG: doDarkenBG = true }) {
    super();
    this.onTouchTap = onTouchTap;
    this._style = _style;
    this.children = children;
    this.doDarkenBG = doDarkenBG;
  }
  render() {
    let style = mergeCSS(this._style, {
      display: 'block',
      textAlign: 'center',
      WebkitUserSelect: 'none'
    });
    //onTouchTap={onTouchTap}
    if (this.doDarkenBG)
      return (
        <a
          className={this.props.className}
          href='javascript:void(0)'
          onTouchStart={darkenBG}
          onTouchEnd={clearBG}
          onTouchCancel={clearBG}
          onTouchTap={this.onTouchTap}
          style={style}>
          {this.children}
        </a>
      );
    else
      return (
        <a
          className={this.props.className}
          href='javascript:void(0)'
          onTouchTap={this.onTouchTap}
          style={style}>
          {this.children}
        </a>
      );
  }
}

export default Button
