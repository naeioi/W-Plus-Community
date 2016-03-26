import React from 'react'
import moment from 'moment'
import { mockNotifi } from '../../mockData'

const Notifi = () => {
	const s = {
		msg: {
			//width: '100%',
			borderBottom: '1px solid rgb(230, 230, 230)',
			padding: '0 30px',
			lineHeight: '1.7em',
			fontSize: '0.7em'
		},
		content: {
			float: 'left'
		},
		timeStamp: {
			float: 'right'
		}
	};

	return (
		<div>
			{
				mockNotifi.map((msg, ind)=>(
					<div 
						key={ind}
						style={s.msg}>
						<div style={s.content}>{msg.content}</div>
						<div style={s.timeStamp}>
							{ msg.timeStamp.isBefore(moment().subtract(1, 'day')) ? 
										msg.timeStamp.format('MM-dd hh:mm') : 
										msg.timeStamp.format('hh:mm')}
						</div>
						<div className='clearFloat'></div>
					</div>
					))
			}
		</div>
	)
}

export default Notifi