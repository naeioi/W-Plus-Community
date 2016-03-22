import React from 'react'
import moment from 'moment'
import Button from './Button.jsx'
import { fgColor1, fgColor2, bgColor1, bgColor2 } from '../style/baseCSS'
import { mergeCSS, setAlpha } from '../utility/style'

class DatePicker extends React.Component {
  constructor({ defaultDate }) {
    super();
    this.state = {
      selDate: defaultDate ? moment(defaultDate) : moment(),
      notification: ''
    }
  }

  accept(date) {
    const {
      onlyFuture = true,
      isAccepted
    } = this.props;
    return (isAccepted && (date))
     || ( onlyFuture && date >= moment() );
  }

  render() {

    const {
      select
    } = this.props;

    const {
      selDate
    } = this.state;

    const s = {
      main: mergeCSS(this.props.style, {
        position: 'absolute',
        right: 0,
        width: '100%',
        border: '1px solid rgba(0,0,0,0.1)',
        maxWidth: 450
      }),
      header: {
        position: 'relative',
        textAlign: 'center',
        height: 30,
        lineHeight: '30px',
        fontWeight: 'bold',
        color: fgColor2,
        backgroundColor: fgColor1,
      },
      leftArrow: {
        boxSizing: 'border-box',
        padding: '7 0',
        position: 'absolute',
        top: 0, bottom: 0,
        left: 0,
        height: 30,
        width: 30,
        color: 'rgb(255,255,255)'
      },
      rightArrow: {
        position: 'absolute',
        boxSizing: 'border-box',
        padding: '4 0',
        height: 30,
        width: 30,
        top: 0, bottom: 0,
        right: 0,
        color: 'rgb(255,255,255)',
        lineHeight: 30,
        transform: 'rotate(180deg)'
      },
      day: {
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
      weekday: {
        boxSizing: 'border-box',
        backgroundColor: fgColor1,
        width: '14.2857%',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'white',
        borderBottom: '1px solid rgb(200,200,200)',
        fontWeight: 'bold'
      },
      dayWrap: {
        boxSizing: 'border-box',
        backgroundColor: 'rgb(255, 255, 255)',
        width: '14.2857%',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'black'
      },
      disableDayWrap: {
        boxSizing: 'border-box',
        backgroundColor: 'rgb(255,255,255)',
        width: '14.2857%',
        height: 35,
        float: 'left',
        textAlign: 'center',
        lineHeight: '35px',
        color: 'rgb(200,200,200)',
      }
    };
    return (
      <div style={s.main}>
        <div style={s.header}>
          <Button style={s.leftArrow} className='icon-left-open-big'
            onTouchTap={()=>this.setState({selDate: selDate.add(-1, 'month')})}
            >
          </Button>
          <Button style={s.rightArrow} className='icon-left-open-big'
            onTouchTap={()=>this.setState({selDate: selDate.add(1, 'month')})}
            >
          </Button>
          {this.state.selDate.format('MMM')}
        </div>
        {
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day)=>(
            <div
              key={day}
              style={s.weekday}>
              {day}
            </div>
          ))
        }
        <div
          style={s.notifier}
          >
          {this.state.notification}
        </div>
        {((startDay, endDay)=>{
          let days = [];
          for(let day = moment(startDay); day <= endDay; day.add(1, 'day')) {
            days.push(
              <div
                key={day.format('MMDD')}
                style={this.accept(day) ? s.dayWrap : s.disableDayWrap}
                >
                <Button
                  onTouchTap={
                    ((str) => (
                      ()=> this.accept(moment(str)) ? select(moment(str)) : void(0)
                    ))(day.format())}
                  style={s.day}>
                  {day.date()}
                </Button>
              </div>
            )
          }
          return (
            <div>
              {days}
              <div className='clearFloat'></div>
            </div>
          );
        })(moment(selDate).startOf('month').startOf('week'), moment(selDate).endOf('month').endOf('week'))}
      </div>
    )
  }
}

export default DatePicker
