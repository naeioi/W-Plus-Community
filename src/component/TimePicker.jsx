import React from 'react'
import moment from 'moment'
import Button from './Button.jsx'
import { fgColor1, fgColor2, bgColor1, bgColor2 } from '../style/baseCSS'
import { setAlpha } from '../utility/style'
import Circle from './Circle.jsx'
import { mergeCSS } from '../utility/style'

class TimePicker extends React.Component {
  constructor({ defaultBeginHour: startHour, defaultEndHour: endHour }) {
    super();
    this.state = {
      startHour: startHour,
      endHour: endHour,
      notification: '',
      ok: false
    }
  }

  /* @return {invalid, empty, occupied, full} */

  hourState(hour) {
    const {
      onlyFuture = true,
      hourState: _hourState
    } = this.props;
    return _hourState ? _hourState(hour) :
      ( onlyFuture && hour >= moment() ? 'empty' : 'invalid');
  }

  componentDidUpdate() {

    const mapNotifier = (str) => {
      switch(this.hourState(str)) {
        case 'invalid':
          return '选中时间不可用';
        case 'full':
          return '选中时间满员';
        default:
          return '';
      }
    }

    let notifier = '';
    if(this.state.startHour) {
      notifier = mapNotifier(this.state.startHour);
      if(this.state.endHour) {
        notifier = notifier || mapNotifier(this.state.endHour);
        for(let hour = moment(this.state.startHour); hour < this.state.endHour; hour.add(1, 'hour')) {
          notifier = notifier || mapNotifier(hour);
        }
      }
    }
    if(notifier != this.state.notification)
      this.setState({
        notification: notifier,
        ok: false
      })
    if((this.state.startHour||this.state.endHour)&&!notifier && !this.state.ok) {
      this.setState({
        ok: true
      })
    }
    else if(notifier && this.state.ok) {
      this.setState({
        ok: false
      })
    }
  }

  render() {

    const {
      select, date=moment()
    } = this.props;

    const {
      startHour: sStartHour, endHour: sEndHour
    } = this.state;

    const s = {
      main: {
        width: '100%',
        border: '1px solid rgba(0,0,0,0.1)',
        maxWidth: 250,
        margin: '0 auto',
        backgroundColor: 'white'
      },
      header: {
        position: 'relative',
        textAlign: 'center',
        height: 30,
        lineHeight: '30px',
        fontWeight: 'bold',
        color: fgColor2,
        backgroundColor: fgColor1,
      },
      hour: {
        color: 'inherit',
      },
      notifier: {
        minHeight: 5,
        lineHeight: '20px',
        padding: '0 10%',
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#cc0000',
        fontSize: '0.5em'
      },
      disableHourWrap: {
        boxSizing: 'border-box',
        backgroundColor: 'rgb(255,255,255)',
        width: '20%',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'rgb(200,200,200)',
      },
      hint: {
        width: 10,
        float: 'left'
      },
      button: {
        boxSizing: 'border-box',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        padding: '5 0',
        color: fgColor2,
        fontWeight: 'bold'
      }
    };

    const mapHourStyle = (hour) => {
      let style = {
        boxSizing: 'border-box',
        backgroundColor: 'rgb(255, 255, 255)',
        width: '20%',
        margin: '1% 0',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'black'
      };

      const hs = this.hourState(hour);
      const isPeriodEnd = (this.state.startHour && hour.hour() === this.state.startHour.hour()) || (this.state.endHour && hour.hour() === this.state.endHour.hour());
      const isInPeriod = this.state.startHour && this.state.endHour && hour > this.state.startHour && hour < this.state.endHour;

      if(hs === 'invalid')
        style = mergeCSS(style, {
          backgroundColor: 'rgb(255,255,255)',
          color: 'rgb(200,200,200)',
        });
      if(isPeriodEnd) {
        style.backgroundColor = 'rgb(0, 177, 213)';
        style.color = 'white';
      }
      else if(isInPeriod) {
        style.backgroundColor = 'rgb(193, 229, 241)';
        style.color = 'white';
      }
      if(hs === 'occupied')
        style.color = fgColor1;
      if(hs === 'full')
        style.color = 'red';

      return style;
    }

    return (
      <div style={s.main}>
        <div style={s.header}>
          {date.format('MMM DD')}
          <Button
            className='icon-tick'
            onTouchTap={()=>this.state.ok?select(this.state.startHour, this.state.endHour):void(0)}
            style={s.button}>
          </Button>
        </div>
        <div
          style={s.notifier}
          >
          {this.state.notification}
        </div>
        {((startHour, endHour)=>{
          let hours = [];
          for(let hour = moment(startHour); hour <= endHour; hour.add(1, 'hour')) {
            hours.push(
              <div
                key={hour.hour()}
                style={mapHourStyle(hour)}
                >
                <Button
                  onTouchTap={
                    ((str) => (
                      ()=> {
                        let hour = moment(str);
                        if(!this.state.startHour) {
                          this.setState({
                            startHour: hour,
                            ok: false
                          })
                        }
                        else if(this.state.startHour.hour() === hour.hour()) {
                          this.setState({
                            startHour: null,
                            endHour: null,
                            ok: false
                          })
                        }
                        else if(!this.state.endHour) {
                          if(this.state.startHour < hour) {
                            this.setState({
                              endHour: hour,
                              ok: false
                            })
                          } else {
                            this.setState({
                              startHour: hour,
                              endHour: this.state.startHour
                            })
                          }
                        }
                        else if(this.state.endHour.hour() === hour.hour()) {
                          this.setState({
                            endHour: null,
                            ok: false
                          })
                        }
                        else if(this.state.startHour > hour) {
                          this.setState({
                            startHour: hour,
                            endHour: this.state.startHour
                          })
                        }
                        else if(true) {
                          this.setState({
                            endHour: hour
                          })
                        }
                      }
                    ))(hour.format())}
                  style={s.hour}>
                  {hour.hour()}
                </Button>
              </div>
            )
          }
          return (
            <div>
              {hours}
              <div className='clearFloat'></div>
            </div>
          );
        })(moment(date).hour(6), moment(date).add(1, 'day').hour(1))}
      </div>
    )
  }
}

export default TimePicker
