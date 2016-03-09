import React from 'react'
import { mergeCSS } from '../utility/style'

class Showcase extends React.Component {
  constructor({ style: _style, posters }) {
    super();
    this.s = {
      main: mergeCSS(_style, {
        height: _style && _style.height ? _style.height : 150,
        width: '100%'
      })
    }
    this.posters = posters;
    this.state = {
      ind: 0
    }
  }
  render() {
    const mod = (i,n) => {
      while(i < 0) i = i+n;
      return i%n;
    }
    const postersHalfCnt = 3;
    let disPosters = {};
    for(let i = -postersHalfCnt; i < postersHalfCnt; i++) {
      disPosters[i] = this.posters[mod(i, this.posters.length)];
    }

    return (
      <div
        className='noscrollbar'
        style={{
          width: '100%',
          paddingBottom: '40%',
          whiteSpace: 'nowrap'
        }}>
        <div style={{position:'absolute', width: '100%', height: 0, overflowX: 'scroll',}}>
          {
            Object.keys(disPosters).map((ind)=>{
              return (
                <img
                  key={ind}
                  style={{
                    //display: 'block',
                    //float: 'left',
                    width: '100%',
                    paddingBottom: '40%',
                    backgroundImage: `url(${disPosters[ind].event.pic})`,
                    backgroundPosition: '50% 20%'
                  }}>
                </img>)
            })
          }
        </div>
      </div>
    );
  }
}

export default Showcase
