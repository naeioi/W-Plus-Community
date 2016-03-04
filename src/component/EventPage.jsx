import React from 'react'
import ReactDOM from 'react-dom'

const EventPage = ({ e }) => {
  return (
    <Header
      style={{zIndex: 2}}
      backable={true}
      shareDate={{name: 'zhu'}}>
      活动
    </Header>
    <NavBar style={{zIndex: 1}} />
    <Event e={e} />
  );
}

export default EventPage
