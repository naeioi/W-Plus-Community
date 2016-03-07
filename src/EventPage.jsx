import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header.jsx'
import NavBar from './component/NavBar.jsx'
import Event from './component/Event.jsx'
import { CommentSection } from './component/Comment.jsx'

const EventPage = ({ event: e }) => {
  return (
    <div>
      <Header
        style={{zIndex: 2}}
        backable={true}
        shareDate={{name: 'zhu'}}>
        活动
      </Header>
      <Event event={e} />
    </div>
  );
}

export default EventPage
