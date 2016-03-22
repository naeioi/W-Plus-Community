import React from 'react'
import moment from 'moment'
import DatePicker from '../component/DatePicker.jsx'
import TimePicker from '../component/TimePicker.jsx'
import Header from '../component/Header.jsx'
import {mergeCSS} from '../utility/style'
import ScreenMask from '../component/ScreenMask.jsx'

class ReserveRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			date: null,
			start: null,
			end: null,
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
		};

		const {
			date, start, end,
			onDatePicker, onTimePicker
		} = this.state;

		return (
			<div style={s.main}>
				<ScreenMask 
					onTouchTap={()=>{this.setState({onTimePicker:false, onDatePicker:false})}}
					style={{
						display: onDatePicker || onTimePicker ? 'block':'none', 
						zIndex: 1}}/>
				<Header >
					场地预约
				</Header>
				<div className='barEntry'>
					<div
						onTouchTap={this.displaySpacePicker.bind(this)}>
						预约地点
					</div>
				</div>
				<div 
					className='barEntry'>
					<div
						onTouchTap={this.displayDatePicker.bind(this)}>
						日期
						<div style={{float: 'right', color: 'rgba(0,0,0,0.2)'}}>
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
						<div style={{float: 'right', color: 'rgba(0,0,0,0.2)'}}>
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
				</div>
			</div>
		);
	}
}

export default ReserveRoom