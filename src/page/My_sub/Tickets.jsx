import React from 'react'
import { mockTickets } from '../../mockData'
const sideBg = require('../../../static/tag.png');

const Ticket = ({ticket}) => {
	console.log(ticket)
	let s = {
		main: {
			position: 'relative',
			height: 100,
			margin: '10 10',
			boxShadow: '0 1px 10px 1px rgba(0,0,0,0.1)'
		},
		side: {
			float: 'left',
			height: '100%',
			background: `url(${sideBg})`,
			width: 5
		},
		content: {
			height: '100%',
			textAlign: 'center'
		},
		left: {
			fontFamily:'Tahoma',
			position: 'relative',
			float: 'left',
			width: 140,
			borderRight: '1px solid rgba(0,0,0,0.1)'
		},
		start: {
			lineHeight: '50px',
			fontSize: 30
		},
		tag: {
			paddingLeft: 5,
			height: 20,
			backgroundColor: 'rgba(255,0,0,0.8)',
			color: '#fefefe',
			lineHeight: '20px',
			fontSize: '0.9em',
			borderRight: '1px solid rgba(0,0,0,0.1)'
		},
		sup: {
			color: '#4f4f4f',
			lineHeight: '30px',
			borderRight: '1px solid rgba(0,0,0,0.1)'
		}, 
		right: {

		}
	};

	return (
		<div style={s.main}>
			<div style={s.side}>
			</div>
			<div style={s.content}>
				<div style={s.left}>
					<div style={s.start}>{ticket.start.format('hh:mm')}</div>
					<div style={{float: 'left', width: '50%', fontSize: '0.8em'}}>
						<div style={s.tag}>TO</div>
						<div style={s.sup}>{ticket.end.format('hh:mm')}</div>
					</div>
					<div style={{float: 'left', width: '50%', fontSize: '0.8em'}}>
						<div style={s.tag}>DATE</div>
						<div style={s.sup}>{ticket.start.format('ddd M/D')}</div>
					</div>
				</div>
				<div style={{display: 'table', height: '100%', margin: '0 auto'}}>
					<div style={{verticalAlign: 'middle', display: 'table-cell'}}>{ticket.title}</div>
				</div>
			</div>
		</div>
	)
}

const Tickets = () => {
	return (
		<div>
			{
				mockTickets.map((ticket, ind)=>(
						<Ticket 
							key={ind}
							ticket={ticket}
							/>
					))
			}
		</div>
	)
}

export default Tickets