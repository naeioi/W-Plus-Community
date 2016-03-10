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
      notification: ''
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
    if(this.state.startHour && this.state.endHour) {
      this.props.select(this.state.startHour, this.state.endHour);
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
        margin: '0 auto'
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
        color: '#cc0000'
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
      }
    };

    const mapHourStyle = (hour) => {
      let style = {
        boxSizing: 'border-box',
        backgroundColor: 'rgb(255, 255, 255)',
        width: '20%',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'black'
      };

      const hs = this.hourState(hour);
      const isPeriodEnd = (sStartHour && hour.hour() == sStartHour.hour()) || (sEndHour && hour.hour() == sEndHour.hour());
      const isInPeriod = hour > sStartHour && hour < sEndHour;

      if(hs === 'invalid')
        style = mergeCSS(style, {
          backgroundColor: 'rgb(255,255,255)',
          color: 'rgb(200,200,200)',
        });
      if(hs === 'occupied')
        style.color = fgColor1;
      if(hs === 'full')
        style.color = 'red';
      if(isPeriodEnd)
        style.backgroundColor = 'blue';
      if(isInPeriod)
        style.backgroundColor = 'blue';
      return style;
    }

    return (
      <div style={s.main}>
        <div style={s.header}>
          {date.format('MMM DD')}
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
                        if(!this.state.startHour) {
                          this.setState({
                            startHour: moment(str)
                          })
                        }
                        else if(this.state.startHour.hour() === moment(str).hour()) {
                          this.setState({
                            startHour: null,
                            endHour: null
                          })
                        }
                        else if(!this.state.endHour) {
                          this.setState({
                            endHour: moment(str)
                          })
                        }
                        else if(this.state.endHour.hour() === moment(str).hour()) {
                          this.setState({
                            endHour: null
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
