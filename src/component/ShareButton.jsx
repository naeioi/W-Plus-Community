import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'
import { fgColor2 } from '../style/baseCSS'
import Button from './Button.jsx'
import PopUpShare from './PopUpShare.jsx'

class ShareButton extends React.Component {
  constructor(props) {
    super();
    this.styleWrap = mergeCSS(props.style, {
      textAlign: 'center',
      color: fgColor2
    });
    this.style = {
      padding: 13
    };
  }

  cancelShare() {
    ReactDOM.unmountComponentAtNode(this.refs['popUpDiv']);
  }

  onTouchTap() {
    const maskStyle = {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      transition: 'background-color 300ms ease-in-out',
      WebkitTransition: 'background-color 300ms ease-in-out',
      zIndex: 2
    }, popUpShareStyle = {
      position: 'fixed',
      bottom: 0,
      zIndex: 3
    };
    ReactDOM.render((
      <div>
        <div
          style={maskStyle}
          ref={(e) => e ? setTimeout(()=>e.style.backgroundColor='rgba(0,0,0,0.3)',0) : void(0) }
          onTouchTap={this.cancelShare.bind(this)}
          id='screen-mask'></div>
        <PopUpShare
          {...this.props}
          style={popUpShareStyle} />
      </div>
    ), this.refs['popUpDiv']);
  }

  render() {
    return (
      <div>
        <div ref='popUpDiv'></div>
        <Button
          onTouchTap={this.onTouchTap.bind(this)}
          style={this.styleWrap}>
          <div
            style={this.style}
            className='icon-share'>
          </div>
        </Button>
      </div>
    );
  }
}

export default ShareButton
