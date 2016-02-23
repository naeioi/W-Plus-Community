import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/component/Header.jsx'
import { fgColor2 } from '../src/baseCSS'

const App = () => (
  <div>
    <Header
      backable={true}
      supplyment={
        <div
          style={{
            width:25,
            height:25,
            backgroundColor: fgColor2
          }}>
        </div>
      }>
      中文
    </Header>
  </div>
)

ReactDOM.render(<App />, document.getElementById('App'));
