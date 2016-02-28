import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/component/Header.jsx'
import { fgColor2 } from '../src/style/baseCSS'
import ShareButton from '../src/component/ShareButton.jsx'
import '../src/style/base.css'
import NavBar from '../src/component/NavBar.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const App = () => (
  <div>
    <Header
      backable={true}
      shareData={{name:'zhu'}}>
      中文233
    </Header>
    <NavBar />
    <div
      onTouchStart={(e)=>console.log(e)}
      style={{
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        width: 30,
        height: 30,
        backgroundColor: fgColor2
      }}>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('App'));
