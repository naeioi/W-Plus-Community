import React from 'react'
import Header from '../component/Header.jsx'
import DatePicker from '../component/DatePicker.jsx'
import TimePicker from '../component/TimePicker.jsx'
import moment from 'moment'
import ScreenMask from '../component/ScreenMask.jsx'
import { mergeCSS } from '../utility/style'

class ApplyEvent extends React.Component {
	constructor() {
		super();
		this.state = {
			title: null, 
			data: null,
			start: null,
			end: null,
			space: null,
			onDatePicker: false,
			onTimePicker: false
		}
	}

	displaySpacePicker() {

	}

	displayDatePicker() {
		this.setState({
			onDatePicker: true
		})
	}

	displayTimePicker() {
		this.setState({
			onTimePicker: true
		})
	}

	render() {
		let s = {
			main: {
				marginTop: 65
			},
			rightInfo: {
				'float': 'right',
				'color': 'rgba(0,0,0,0.2)'
			},
			text: {
				'display': 'block',
		    'width': '100%',
		    'minHeight': 130,
		    'border': 'none',
		    'fontFamily': 'verdana',
		    lineHeight: '1.4em'
			}
		};

		const {
			onDatePicker,
			onTimePicker,
			date,
			start,
			end
		} = this.state;

		return (
			<div style={s.main}>
				<ScreenMask 
					onTouchTap={()=>{this.setState({onTimePicker:false, onDatePicker:false})}}
					style={{
						display: onDatePicker || onTimePicker ? 'block':'none', 
						zIndex: 1}}/>
				<Header >
					发起活动
				</Header>
				<div className='barEntry'>
					<div>
						活动标题
					</div>
				</div>
				<div 
					className='barEntry'>
					<div
						onTouchTap={this.displayDatePicker.bind(this)}>
						日期
						<div style={s.rightInfo}>
							{date ? date.format('MMM DD'):""}
						</div>
						<DatePicker 
							select={(_date)=>{
								const date = moment(_date).format();
								setTimeout(()=>{this.setState({
									onDatePicker: false,
									date: moment(date)
								})}, 0);
							}}
							style={
								mergeCSS(s.dataPicker, {
									display: onDatePicker ? 'block':'none',
									zIndex: 2})} />
					</div>
					<div
						onTouchTap={this.displayTimePicker.bind(this)}>
						时间
						<div style={s.rightInfo}>
							{ start ? start.format('HH:mm'):"" } - { end ? end.format('HH:mm'):"" }
						</div>
						<TimePicker 
							select={(_start, _end)=>{
								const start = _start.format(), end = _end.format();
								console.log(start); console.log(end);
								setTimeout(()=>{this.setState({
									onTimePicker: false,
									start: moment(start),
									end: moment(end)
								})}, 0);
							}}
							style={
								mergeCSS(s.dataPicker, {
									display: onTimePicker ? 'block':'none',
									zIndex: 2})} />
					</div>
					<div					
						onTouchTap={this.displaySpacePicker.bind(this)}>
						活动地点
					</div>
				</div>
				<div className='barEntry'>
					<div>
						活动海报
					</div>
					<div>
						活动详情
						<textarea style={s.text}></textarea>
					</div>
				</div>
			</div>
		)
	}
}

export default ApplyEvent;