import React from 'react'
import ReactDOM from 'react-dom'
import { mergeCSS } from '../utility/style'
import { bgColor1, fgColor1 } from '../style/baseCSS'

const mockComment = {
  thumbnail: require('../../static/mockCommentThumbnail.png'),
  userName: '王小明',
  content: '活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？活动需要自己带些什么呢？',
  date: '2月14日'
};

const CommentEntry = ({style: _style, comment}) => {
  let style = {
    main: mergeCSS(_style, {
      width: '100%',
      minHeight: 60,
      boxSizing: 'border-box',
      borderBottom: `1px solid ${bgColor1}`,
      padding: '10 3'
    }),
    thumbnail: {
      float: 'left',
      width: 40,
      height: 40,
      paddingRight: 10
    },
    middle: {
      lineHeight: '1.5em',
      fontSize: '0.8em',
      marginLeft: 10,
      display: 'table'
      //backgroundColor: 'rgba(0,0,0,0.3)'
    },
    right: {
      height: 40,
      position: 'relative',
      float: 'right',
      fontSize: '0.8em',
      paddingLeft: 5
    }
  }
  return (
    <div style={style.main}>
      <img style={style.thumbnail} src={comment.thumbnail}></img>
      <div style={style.right}>
        <div>{comment.date}</div>
        <div style={{position: 'absolute', bottom: 0, right: 0, color: fgColor1}}>回复</div>
      </div>
      <div style={style.middle}>
        <div style={{color: fgColor1, marginBottom: 5}}>{comment.userName}</div>
        <div>{comment.content}</div>
      </div>
    </div>
  )
}

class CommentSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    let style = {
      main: mergeCSS(this.props.style, {
        boxSizing: 'border-box',
        border: '1px solid rgb(200,200,200)',
        backgroundColor: 'white',
        fontSize: '0.8em'
      }),
      inputBar: {
        minHeight: 25,
        borderBottom: `1px solid ${bgColor1}`,
        padding: '1 5',
      },
      input: {
        display: 'block'
      },
      inputBtn: {
        width: 20,
        height: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
      },
      inputBtnWrap: {
        float: 'right'
      }
    }
    return (
      <div style={style.main}>
        <div style={style.inputBar}>
          <div style={{float: 'left', fontWeight: 'bold', marginRight: 10}}>评论</div>
          <div style={style.inputBtnWrap}>
            <div style={style.inputBtn}></div>
          </div>
          <input style={style.input}></input>
        </div>
        <CommentEntry comment={mockComment}/>
        <CommentEntry comment={mockComment}/>
        <CommentEntry comment={mockComment}/>
        <CommentEntry comment={mockComment}/>
        <CommentEntry comment={mockComment}/>
        <CommentEntry comment={mockComment}/>
      </div>
    );
  }
}

export { CommentEntry, CommentSection }
