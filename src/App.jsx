import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <RaisedButton>
        Raised
      </RaisedButton>
      <FlatButton>
        Flat
      </FlatButton>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('App'));
