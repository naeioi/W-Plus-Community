import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'

class ScreenMask extends React.Component{
  constructor({style: _style, onTouchTap, alpha}) {
    super();
    this.onTouchTap = onTouchTap;
    this.alpha = alpha || 0.3;
  }
  componentDidMount() {
    setTimeout(()=>this.refs['mask'].style.backgroundColor = `rgba(0,0,0,${this.alpha})`, 10);
  }
  render() {
    let style = mergeCSS(this.props.style, {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'background-color 200ms ease-in-out',
        WebkitTransition: 'background-color 200ms ease-in-out',
        MozTransition: 'background-color 200ms ease-in-out',
        zIndex: (this.props.style && this.props.zIndex) ? this.props.style.zIndex : 2
    });
    return (
      <div
        style={style}
        ref='mask'
        onTouchTap={this.onTouchTap}>
      </div>
    );
  }
}

export default ScreenMask
